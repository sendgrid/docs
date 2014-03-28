require 'rack'
require 'htmlentities'
require 'uri'

module Jekyll
  class LiveDocTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.split(" ")
      @method = parameters[0].upcase
      @url = parameters[1]

      super
    end

    def render(context)
      uri = URI.parse(@url);
      if !uri.nil?
        base_url = uri.scheme + "://" + uri.host + uri.path
      end

      #wondering what this syntax is? google "here document"
      output=<<-HTML
      <div class="live-doc">
        <input type="hidden" class="method" value="#{@method}"/>
        <input type="hidden" class="url" value="#{base_url}"/>
        <button class="btn btn-primary tryit">Try It</button>
        <form role="form" class="well">
          <table>
            <tbody>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Requirements</th>
                <th>Description</th>
              </tr>
            <tbody>
          </table>
        </form>
      </div>
      HTML

      output
    end
  end
end

Liquid::Template.register_tag('livedoc', Jekyll::LiveDocTag)
