# Title: Modified Simple Code Blocks for Jekyll
# Author: Brandon West based on code by Brandon Mathis http://brandonmathis.com
# Description: Write codeblocks with semantic HTML5 <figure> and <figcaption> elements and optional syntax highlighting — all with a simple, intuitive interface.
#
# Syntax:
# {% codeblock [title] [url] [link text] %}
# code snippet
# {% endcodeblock %}
#
# For syntax highlighting, put a file extension somewhere in the title. examples:
# {% codeblock file.sh %}
# code snippet
# {% endcodeblock %}
#
# {% codeblock Time to be Awesome! (awesome.rb) %}
# code snippet
# {% endcodeblock %}
#
# Example:
#
# {% codeblock Got pain? painreleif.sh http://site.com/painreleief.sh Download it! %}
# $ rm -rf ~/PAIN
# {% endcodeblock %}
#
# Output:
#
# <figure class='code'>
# <figcaption><span>Got pain? painrelief.sh</span> <a href="http://site.com/painrelief.sh">Download it!</a>
# <div class="highlight"><pre><code class="sh">
# -- nicely escaped highlighted code --
# </code></pre></div>
# </figure>
#
# Example 2 (no syntax highlighting):
#
# {% codeblock %}
# <sarcasm>Ooooh, sarcasm... How original!</sarcasm>
# {% endcodeblock %}
#
# <figure class='code'>
# <pre><code>&lt;sarcasm> Ooooh, sarcasm... How original!&lt;/sarcasm></code></pre>
# </figure>
#
require './plugins/pygments_code'
require './plugins/raw'
require 'digest/md5'

module Jekyll

  class CodeBlock < Liquid::Block
    include HighlightCode
    include TemplateWrapper
    CaptionUrlTitle = /(\S[\S\s]*)\s+(https?:\/\/)(\S+)\s+(.+)/i
    CaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/)(\S+)/i
    Caption = /(\S[\S\s]*)/
    def initialize(tag_name, markup, tokens)
      @title = nil
      @caption = nil
      @filetype = nil
      @highlight = true
      if markup =~ /\s*lang:(\w+)/i
        @filetype = $1
        markup = markup.sub(/lang:\w+/i,'')
      end
      if markup =~ CaptionUrlTitle
        @file = $1
        @caption = "<figcaption><span>#{$1}</span><a href='#{$2 + $3}'>#{$4}</a></figcaption>"
      elsif markup =~ CaptionUrl
        @file = $1
        @caption = "<figcaption><span>#{$1}</span><a href='#{$2 + $3}'>link</a></figcaption>"
      elsif markup =~ Caption
        @file = $1
        @caption = "<figcaption><span>#{$1}</span></figcaption>\n"
      end
      if @file =~ /\S[\S\s]*\w+\.(\w+)/ && @filetype.nil?
        @filetype = $1
      end
      super
    end

    def render(context)
      output = super
      code = super

      digest = Digest::MD5.hexdigest code
      
    source = <<HTML
<div class="code-wrapper" id="wrapper_#{digest}" itemscope itemtype="http://schema.org/Code">
  <meta itemscope="name" content="#{@title}">
  <meta itemscope="programmingLangauge" content="#{@filetype}">
  <div class="code-buttons">
    <ul class="nav nav-tabs">
      <li class="pull-right">
        <a class="copycode code-button btn-mini" id="copy_#{digest}">
          <i class="icon-copy"></i> Copy
        </a>
      </li>
      <li class="pull-right">
        <a class="expandcode code-button btn-mini" id="expand_#{digest}">
          <i class="icon-fullscreen"></i> Fullscreen
        </a>
      </li>
    </ul>
  </div>
  <figure class="code" id="code_#{digest}">
  #{@caption}
HTML

      if @filetype
        @filetype = @filetype == "json" ? "javascript" : @filetype
        source += " #{highlight(code, @filetype)}</figure>"
      else
        source += "#{tableize_code(code.lstrip.rstrip.gsub(/</,'&lt;'))}</figure>"
      end
      source += "</div>"
      source = safe_wrap(source)
      source = context['pygments_prefix'] + source if context['pygments_prefix']
      source = source + context['pygments_suffix'] if context['pygments_suffix']
      source
    end
  end
end

Liquid::Template.register_tag('codeblock', Jekyll::CodeBlock)
