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
  @@attr_list = ""
  @@attr_string = ""
  @@param_string = ""
  @@method = ""
  @@path = ""
  @@request_body = ""
  @@response_body = ""
  @@request_headers = ""

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
      @@param_list, @@attr_list, @@param_string = "", "", ""

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

      # attrs get reset by HTTP METHOD
      @@attr_list, @@param_string = "", ""

      if text.include? "]"
        # get the response method from the header
        @@method = text.split("[")[1].gsub("]","")
      else
        debug "HEADER parse error - no HTTP method on " + text
        exit
      end

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
    if text.include? ") ... "
      return docs_liquid_individual_params(text)
    end

    # individual parameters are accessed first in the processing
    if text.include? ") - "
      return docs_liquid_individual_attrs(text)
    end



    # Build the Parameters Liquid Block
    if text.include? "Parameters"
      return docs_liquid_params_block(text, "parameters")
    end

    if text.include? "Attributes"
      return docs_liquid_params_block(text, "attributes")
    end

    #handle the request and response headers
    # When we have headers that tag along, we need to indicate this
    if text.include? "Headers"

      debug "HEADERS!! " + text

      return docs_header(text)

    end
    # next up is an element with Body - we don't know whether it's a request or a response
    if text.include? "Body"
      debug "\t text included Body"
      return docs_body(text)

    end

    debug "\t list_item body_block = " + @@body_block

    debug text

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
      # unless @@http_response[0].to_s == "2"
      #
      #   # call the instance var reset
      #   reset_vars()
      #
      #   # return nothing because we don't want any output here
      #   return ""
      # end

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

  def docs_header(text)

    text = text.gsub("Headers","")

    debug "In docs_header body_block = " + @@body_block

    if "request" == @@body_block
      debug "Found a header! " + text

      @@request_headers = text.gsub("\n","").gsub("&quot;",'"')

    end

    if "response" == @@body_block
      #@todo build this out
    end

  end

  # handle the body of the request or response
  def docs_body(text)
    debug "\t --docs_body--"
    text = text.gsub("Body","")

    debug "Body Block: " + @@body_block

    if "request" == @@body_block

      @@request_body = text.gsub("\n", "").gsub("&quot;",'"').strip

      debug "\t REQUEST BODY SET " + text.gsub("\n", "").gsub("&quot;",'"').strip

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

  # Rules:
  #   Attributes has "(required, type) - "
  #   the first word is the param name
  #   everything between the first word and the open paren is the example
  #   between the params are required, type data
  #   everything after the " - " is the description
  def docs_liquid_individual_attrs(text)
    debug "\t --Individual Attributes--"
    # BluePrint example --- :identifier :example (:optional, :type) - :description

    debug "\t\tAttr String: " + text

    position = text.index(" ")
    #the identifier is everything before the first space.
    identifier = text[0..position].strip

    debug "\t\tidentifier: " + identifier

    text = text[position..text.length].strip

    debug "\t\tnew text: " + text

    # find the open paren
    position = text.index(" (")

    #the example is everything from the first space to the open paren
    example = text[0..position]

    if example.length > 0
      example = docs_example_text(example)
    end

    debug "\t\texample: " + example

    text = text[position..text.length].strip

    debug "\t\tnew text: " + text

    position = text.index(" - ")

    #get the description, add example no matter what
    description = text[position..text.length].gsub(" - ", "").strip

    debug "\t\tdescription: " + description

    if description.rindex(".") != (description.length - 1)
      throw "Description should have a period at the end. Given: " + description + " For identifier: " + identifier
    end

    description +=  example

    text = text[0..position].strip.gsub("("," ").gsub(")", " ").split(",")

    debug "\t\t new text: "

    optional = text[0].strip

    debug "\t\t optional: " + optional

    unless optional.include? "required"
      unless optional.include? "optional"
        throw "String must be 'optional' or 'required' in parens. example: (optional, number, example string) \n String was: " + optional
      end
    end

    parameter_req = "Yes"

    if "optional" == optional.downcase
      parameter_req = "No"
    end

    requirements = text[1].strip

    debug "\t\t requirements: " + requirements

    @@attr_string += "\t{% parameter #{identifier} #{parameter_req} \"#{requirements}\" \"#{description}\" %}\n"

    debug "\t\t " + @@attr_string

  end

  def docs_default_text(text)
    return "<br />Default: `" + text + "`"
  end

  def docs_example_text(text)
    return "<br />Example: `" + text + "`"
  end


  # handles the specifics of the liquid "parameters" items for the redcarpet:list_item method
  def docs_liquid_individual_params(text)
    debug "\t --Individual Parameter--"
    # BluePrint example --- :identifier = :default (:optional, :type, :example) … :description

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

    debug "Param String: " + text

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

    unless optional.include? "required"
      unless optional.include? "optional"
        throw "String must be 'optional' or 'required' in parens. example: (optional, number, example string) \n String was: " + parameters[0]
      end
    end

    # get the requirements information from the 2nd item in the parenthesis
    requirements = ""

    if optional_requirements[1]
      requirements = optional_requirements[1].strip
    end


    example = ""

    # Create the example from the 3rd item in the parenthesis
    if optional_requirements.length > 2
      optional_requirements[2] = optional_requirements[2].strip

      example = docs_example_text(optional_requirements[2])

      debug "\t " + example
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
      description += docs_default_text(identifier_default[1].strip)
      debug "\t Description: " + description
    else
      identifier = identifier_default
    end

    # lets see if this description has members?
    if description.include? "Members"
      debug "Has Members!!"

      descriptors = description.split("Members")

      description = descriptors[0].strip + " Possible Values: "

      members = descriptors[1].strip.split("\n").compact.collect{|x| x.strip}
      description += members.join(", ")

      debug "New Description: " + description
    end

    # add the example to the end of the description
    if example.length > 0
      description += example
      debug "\t Desc+Example: " + description
    end

    # liquidexample --- {% parameter :identifier :required :requirements :description %}
    debug "\t{% parameter #{identifier} #{parameter_req} \"#{requirements}\" \"#{description}\" %}\n"
    debug "\t TEST "
    debug @@param_string
    @@param_string += "\t{% parameter #{identifier} #{parameter_req} \"#{requirements}\" \"#{description}\" %}\n"
    debug "\t added to param_list['temp']"
  end

  # builds the final output of all the liquid tags, using all the vars we've set
  # we do this during the response, because we finally have all the parts we need
  def docs_liquid_output(text)
    # {% apiv3example :endpoint_identifier :requestType :url?:parameters %}
    #   {% apiv3requestbody %}
    #      json here
    #   {% endapiv3requestbody %}
    #   {% apiv3requestheader %}
    #      json here
    #   {% endapiv3requestheader %}
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

    # output all the tags at once for this endpoint
    # if/when we want to put params on the URL in the Request area, we can do this append - @@params.gsub("\n","")+ - to the Url
    # we will need to probably grab params for the URL from the params list, rather than the request body

    output = ""

    # which display do we use?
    display = "v3response"

    debug "display is " + display

    debug "Response body is " + @@response_body

    # for backwards compatibility - is this json or not?
    if !@@response_body.include? "{"
      if @@response_body.length > 0
        debug "Did not find JSON array in response body"
        display = "v3responselist"
      end
    end


    if "v3responselist" == display

          debug "display is v3responselist"
          temp = ""
          temp +=   "\t{% v3responselist #{text} %}\n"
            responses = @@response_body.split("\n")
              if @@response_body.include? ":"

                  temp += '<h3>Possible ' + text.gsub("HTTP/1.1", "")+ ' Error Messages</h3>'+
                  '<table id="response-errors" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Field</th>
                        <th>Error Message</th>
                      </tr></thead><tbody>'


                  responses.each {|x|
                    debug "response string: " + x

                    #only parse the first colon in the string and allow the rest to be displayed
                    x = x.gsub('"', "").split(":",2)

                    temp += "<tr><td>" + x[0].strip + "</td><td>" + x[1].strip + "</td></tr>"
                        }

                  temp += "</tbody></table>\n\t"
              else
                  debug "This is not a k/v pair of 400 errors"
                  temp += "<ul>\n"
                  responses.each {|x|
                    temp += "\t<li> " + x + "</li>\n"
                  }
                  temp += "</ul>\n"
              end
          temp += "{%endv3responselist%}\n"
          debug temp
          output += temp
    else

      #sometimes we have no params, that's OK
      unless @@param_list.nil?
        debug "\t PARAMS LIST IS NOT NIL"
        output += @@param_list + "\n\n"
      end

      unless @@attr_list.nil?
        debug "\t attr_list is not NIL"
        output += @@attr_list + "\n\n"
      end

      output += "{% apiv3example endpoint#{@@group_identifier} #{@@method} #{url} %}\n"
      if @@request_body.length > 1
        output +=     "\t {% apiv3requestbody %} #{@@request_body.strip} \t {% endapiv3requestbody %}"
      end

      if @@request_headers.length > 1
        output +=     "\t {% apiv3requestheader %}" +
                        @@request_headers.strip +
                      "\t {% endapiv3requestheader %}"
      end
      output +=   "\t{% v3response %}\n" +
          "\t\t" + text + "\n"
        unless @@params.nil?
          if @@response_body.length > 1
            output += JSON.pretty_generate(JSON.parse(@@response_body)) + "\n"
          end
        end
      output += "\t{% endv3response %}\n"
      output +=   "{% endapiv3example %}"
    end

    #sometimes, we don't have a response body. That's ok.

    # call the instance var reset
    reset_vars()
    debug "\n\n" + output + "\n\n"
    return "\n\n" + output + "\n\n"
  end

  # builds the parameter block using the parameters text that is passed in and the group identifier
  def docs_liquid_params_block(text, type)
    debug "\t --" + type + " Block --"

    debug "\t " + type + ": " + text
    # This should be building the following, using the other variables that have been set already

    # {% parameters categoriesget %}
    #   {% parameter category No 'String' 'Prefix search on the category name' %}
    #   {% parameter limit No 'Number' 'The number of results to return' %}
    #   {% parameter offset No 'Number' 'the beginning point in the list where to retrieve results from' %}
    # {% endparameters %}

    # create the params list when we have a list element that says "Params"
    if type == "parameters"
      @@param_list = "{% parameters endpoint#{@@group_identifier} %}\n" + @@param_string + "{% endparameters %}"
      debug "\t param LIST SET: " + @@param_list
    end

    # create the attr list when we have a list element that says "Params"
    if type == "attributes"
      @@attr_list = "{% attributes endpoint#{@@group_identifier} %}\n" + @@attr_string + "{% endattributes %}"
      debug "\t attr LIST SET: " + @@attr_list
    end

    @@param_string = ""
    @@attr_string = ""
    # we don't want any output from this method
    return ""
  end

  def reset_vars()
    debug "## RESET EVERYTHING ##"
    # reset everything, just in case we're about to do another endpoint - path doesn't get reset until another h2, bc we reuse the path
    @@body_block, @@group_identifier, @@http_response, @@params, @@request_body, @@response_body, @@request_headers = "","","","","","","",""
  end

end
