require 'rack'
require 'htmlentities'
require 'uri'

module Jekyll
  class LiveDocTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      parameters = markup.split(" ")
      @identifier = parameters[0]
      @method = parameters[1].upcase
      @url = parameters[2]

      super
    end

    def render(context)
      uri = URI.parse(@url);
      if !uri.nil?
        base_url = uri.scheme + "://" + uri.host + uri.path
      end

      #wondering what this syntax is? google "here document"
      output=<<-HTML
      <div class="live-doc" id="livedoc-#{@identifier}">
        <input type="hidden" class="method" value="#{@method}"/>
        <input type="hidden" class="url" value="#{base_url}"/>
        <form role="form" class="live-form">
          <table class="table table-bordered table-striped live-params">
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
        <div class="live-call">
          <table class="table table-bordered request-block">
          <tbody>
            <tr>
              <td class="method"></td>
              <td>
                <code class="call"></code>
              </td>
            </tr>
            <tr class="request-data hidden">
              <td>Data</td>
              <td>
                <code class="data"></code>
              </td>
            </tr>
            <tr class="response-headers hidden">
              <td>Response Headers</td>
              <td>
                <pre class="headers"></pre>
              </td>
            </tr>
            <tr class="response-body hidden">
              <td>Response Body</td>
              <td>
                <code class="body"></code>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      HTML

      output
    end
  end
end

Liquid::Template.register_tag('livedoc', Jekyll::LiveDocTag)
