require 'redcarpet'
require 'json'

module Jekyll
  class ApiBluePrint < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /apiblueprint/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      content
      renderer = BluePrintHTML.new()
      thismarkdown = Redcarpet::Markdown.new(renderer, no_intra_emphasis: true)
      newcontent = thismarkdown.render(content)
      return Liquid::Template.parse(newcontent).render {}
    end
  end
end

class BluePrintHTML < Redcarpet::Render::HTML

  #turns command line output on, does not work within Jekyll
  @@debug = false

  ####
  # vars for setting the params in the templates
  # could we replace this with a hash, that we reset on each header-## loop?
  ####
  @@body_block = ""
  @@group_identifier = ""
  @@http_response = "200"
  @@params = ""
  @@param_list = ""
  @@method = ""
  @@path = ""
  @@request_body = ""
  @@response_body = ""

  ####
  # set the root url of the API calls
  ####
  @@root_url = "https://api.sendgrid.com/v3/"

  ####
  # Do we want to show the headers?
  ####
  # you would enable h1 and disable h2, to show group headers but not the path headers
  @@show_h1 = TRUE
  @@show_h2 = FALSE

  ####
  # Allow overriding the level of an h1 to something else, default 2
  ####
  @@change_h1_to = 2

  ####
  # Find and replace in these instances
  ####

  @@find_replace = {
      # removes the word "Group" from the h1 header
      "h1" => [["Group" , "" ]]
  }

  # =============
  #
  # Override Methods
  #
  # =============


  # handles the instances where spaces indicate a code block
  def block_code(code, language)
    debug "~~BLOCK CODE~~"
    code.chomp
  end

  # Handles the instance of `something` in API Blueprint
  def codespan(code)
    debug("~~CODESPAN~~")
    code.chomp
  end

  # def emphasis(text)
  #   text
  # end

  # Builds the header tags, according to what we expect from APIBlueprint
  # third param = nil for backwards compatibility with older redcarpet gems
  def header(text, level, somethingelse = nil)
    debug "~~HEADER~~"
    debug "\t level = " + level.to_s

    # get the path and create the group ID for the API requests
    if 2 == level

      # reset for each endpoint path, bc params are the same for all HTTP methods within this path group
      @@param_list = ""

      #create a unique HTML ID for the group

      debug " TESTING MATCH: " +  /(?<=\[).+?(?=\])/.match(text).to_s

      path = /(?<=\[).+?(?=\])/.match(text).to_s

      if path.include? "?"
        path = path.split("?")
        @@path = path[0]
        @@params = "?" + path[1].gsub("&amp;","&")
      else
        @@path = path
      end

      debug "\tPATH SET: " + @@path
      debug "\tPARAMS SET " + @@params

      #reset the identifier for each grouping of params/responses
      @@group_identifier = "group_" + rand(1000000000).to_s

      debug "\tGROUP SET: " + @@group_identifier

      unless @@show_h2

        return ""

      end

    end

    # get the request method
    if 3 == level
      debug "\t--RESET VARS--"
      # get the response method from the header
      @@method = text.split("[")[1].gsub("]","")
      debug "\tMETHOD SET: " + @@method
    end

    if 1 == level

      #if we don't want to show the h1 tag, don't
      unless @@show_h1
        return ""
      end

      #allows user to override the h1 level to something else
      level = @@change_h1_to
      text = do_find_replace(text, "h1")

    end
    debug "\t --header text--: " + text
    "\n\n\n" + '{% anchor h' + level.to_s + ' %}' + text + '{% endanchor %}'

  end

  # The first thing that happens to to text before any other methods are called
  # get rid of double new lines to cleanup the output
  def preprocess(full_document)
    debug "~~PRE PROCESS~~"

    # removes the FORMAT string off the top of the blueprint file
    remove = /FORMAT:\ [0-9a-zA-Z]*/.match(full_document)
    full_document.slice!(remove.to_s)

    return full_document
  end

  # Builds the list elements, by aggregating the content of the list
  def list(content, list_type)
    debug "~~LIST~~"
    debug "\t list type = " + list_type.to_s

    return "\t#{content}"
  end

  # Builds list items
  # We are adding logic to handle specific types of lists in the blueprint
  # since parameters are defined before we need them output, we store and append to the apiv3 liquid block
  def list_item(text, list_type)
    debug "~~LIST ITEM~~"
    debug "\t list type = " + list_type.to_s
    debug "\t" + text

    # individual parameters are accessed first in the processing
    if text.include? " ... "
      return docs_liquid_individual_params(text)
    end

    # Build the Parameters Liquid Block
    if text.include? "Parameters"
      return docs_liquid_params_block(text)
    end

    #handle the request and response headers
    if text.include? "Header"
      # @todo build this out!
    end

    # next up is an element with Body - we don't know whether it's a request or a response
    if text.include? "Body"

      return docs_body(text)

    end

    debug "\t body_block = " + @@body_block

    if text.include? "Response"

      debug "\t text includes http response = " + @@http_response

      if 0 == @@http_response.length
        paragraph(text)
      end

    end

    # Build the Response Liquid block, only if we're ready to do so
    # this is in list_item rather than list, because each endpoint might have multiple responses, sometimes we don't want to
    # show responses with specific response codes.
    if "response" == @@body_block

      # if we don't have one of the 200 responses, don't bother printing it
      # originally done inside of docs_liquid_output
      unless @@http_response[0].to_s == "2"

        # call the instance var reset
        reset_vars()

        # return nothing because we don't want any output here
        return ""
      end

      return docs_liquid_output(text)
    end

    "\t" + text
  end

  # overrides the default paragraph functionality, by setting a variable to indicate what block we're working on.
  #  otherwise, it just returns the text. We don't want p tags, anywhere.
  def paragraph(text)
    debug "~~PARAGRAPH~~"
    if text.include? "Request"
      @@body_block = "request"
      debug "\t Set Body Block: request"
      debug "\t " + text
      # we don't need this text anymore, so return nothing
      return
    end

    if text.include? "Response"
      @@body_block = "response"

      @@http_response = text.split(" ")[1]

      debug "\t http response = " + @@http_response

      debug "\t Set Body Block: response"
      # we don't need this text anymore, so return nothing
      return
    end
    #let's just avoid wrapping things in p tags, mmmkay?
    text
  end

  # =============
  #
  # Custom Methods
  #
  # =============

  # outputs whatever is passed to the terminal
  def debug(text)
    if TRUE == @@debug
      puts text
    end
  end

  # takes values from the find_replace hash and applies the find_replace to the text string
  def do_find_replace(text, index)

    @@find_replace[index].each { |arr|
      text = text.gsub(arr[0], arr[1])
    }

    return text.to_s
  end

  # handle the body of the request or response
  def docs_body(text)
    debug "\t --docs_body--"
    text = text.gsub("Body","")

    if "request" == @@body_block

      @@request_body = text.gsub("\n","")

      debug "\t REQUEST BODY SET " + text.strip

      # we don't want this to be put out to the page yet
      return
    end

    if "response" == @@body_block
      # @todo get the JSON code out and pretty it up - leaving the text


      @@response_body += text.gsub("&quot;",'"').strip
      debug "\t RESPONSE BODY SET " + text.strip

      # we don't want this to be put out to the page yet
      return
    end
    debug "\t remaining text = " + text
    # output anything that gets through, just in case
    text
  end

  # handles the specifics of the liquid "parameters" items for the redcarpet:list_item method
  def docs_liquid_individual_params(text)
    debug "\t --Individual Parameter--"
    # BluePrint example --- :identifier (:optional, :requirements) … :description

    # split by ...
    #       [1] = description
    # regex between parens
    #       then split on comma
    #       [0] optional
    #       [1] requirements
    # delete everything between parens
    #   category is left
    #   if = then we have a default
    #   if no = then we have just name

    parameters = text.split(" ... ")

    description = parameters[1].chop

    # get the data in parens
    optional_requirements = /\(([^)]+)\)/.match(parameters[0])

    # remove the data in parens
    identifier_default = parameters[0].gsub(optional_requirements.to_s,"").strip

    # get the individual items
    optional_requirements = optional_requirements.to_s.gsub("(", "").gsub(")", "").split(",")

    # get the optional/required information from the 1st item in the parenthesis
    optional = optional_requirements[0].strip

    # get the requirements information from the 2nd item in the parenthesis
    requirements = optional_requirements[1].strip

    example = ""

    # Create the example from the 3rd item in the parenthesis
    if optional_requirements.length > 2
      example = " Example: `" + optional_requirements[2].strip + "`"
    end

    parameter_req = "Yes"

    if "optional" == optional.downcase
      parameter_req = "No"
    end

    identifier = ""

    # add the identifier and the default string to the description.
    if identifier_default.include? "="
      identifier_default = identifier_default.split("=")
      identifier = identifier_default[0].strip
      description += " Defaults to " + identifier_default[1].strip
    else
      identifier = identifier_default
    end

    # add the example to the end of the description
    if example.length > 0
      description += example
    end

    # liquidexample --- {% parameter :identifer :required :requirements :description %}
    @@param_list += "\t{% parameter #{identifier} #{parameter_req} \"#{requirements}\" \"#{description}\" %}\n"
  end

  # builds the final output of all the liquid tags, using all the vars we've set
  # we do this during the response, because we finally have all the parts we need
  def docs_liquid_output(text)
    # {% apiv3example :endpoint_identifier :requestType :url?:parameters %}
    #   {% v3response %}
    #   :expectedResponse
    #   [
    #     {
    #         :exampleResults
    #     },
    #     {
    #         :exampleResults
    #     }
    #   ]
    #   {% endv3response %}
    # {% endapiv3example %}

    text = "HTTP/1.1 " + @@http_response

    debug "\t Path: " + @@path.to_s

    if 0 == @@path.index("/")
      @@path[0] = ''
    end

    debug "\t Path: " + @@path.to_s

    url = @@root_url + @@path.strip

    debug "\t URL: " + url

    # remove trailing slash
    url = url.chomp("/").strip

    unless @@params.nil?
      url += @@params
    end

    if @@request_body.length > 1
      # handle a request body with no params
      url += " " + @@request_body.strip
    end

    # output all the tags at once for this endpoint
    # if/when we want to put params on the URL in the Request area, we can do this append - @@params.gsub("\n","")+ - to the Url
    # we will need to probably grab params for the URL from the params list, rather than the request body

    output = ""

    #sometimes we have no params, that's OK
    unless @@param_list.nil?
      debug "\t PARAMS LIST IS NOT NIL"
      output += @@param_list + "\n\n"
    end

    output += "{% apiv3example endpoint#{@@group_identifier} #{@@method} #{url} %}\n" +
        "\t{% v3response %}\n" +
        "\t\t" + text + "\n"

    #sometimes, we don't have a response body. That's ok.
    unless @@params.nil?
      if @@response_body.length > 1
        output += JSON.pretty_generate(JSON.parse(@@response_body)) + "\n"
      end

    end

    output += "\t{% endv3response %}\n" +
        "{% endapiv3example %}"

    # call the instance var reset
    reset_vars()

    return "\n\n" + output + "\n\n"
  end

  # builds the parameter block using the parameters text that is passed in and the group identifier
  def docs_liquid_params_block(text)
    debug "\t --Parameter Block --"

    debug "\t Params: " + text
    # This should be building the following, using the other variables that have been set already

    # {% parameters categoriesget %}
    #   {% parameter category No 'String' 'Prefix search on the category name' %}
    #   {% parameter limit No 'Number' 'The number of results to return' %}
    #   {% parameter offset No 'Number' 'the beginning point in the list where to retrieve results from' %}
    # {% endparameters %}

    # create the params list when we have a list element that says "Params"
    unless @@param_list.include? "parameters"
      @@param_list = "{% parameters endpoint#{@@group_identifier} %}\n" + @@param_list + "{% endparameters %}"
      debug "\t PARAM LIST SET: " + @@param_list
    end

    # we don't want any output from this method
    return ""
  end

  def reset_vars()
    debug "## RESET EVERYTHING ##"
    # reset everything, just in case we're about to do another endpoint - path doesn't get reset until another h2, bc we reuse the path
    @@body_block, @@group_identifier, @@http_response, @@params, @@request_body, @@response_body = "","","","","","",""
  end

end