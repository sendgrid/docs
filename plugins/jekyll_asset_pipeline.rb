require 'japr'

module JAPR
  class LessConverter < JAPR::Converter
    require 'less'

    def self.filetype
      '.less'
    end

    def convert
      parser = Less::Parser.new
      return parser.parse(@content).to_css
    end
  end

  class CssCompressor < JAPR::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      return YUI::CssCompressor.new.compress(@content)
    end
  end

  class JavaScriptCompressor < JAPR::Compressor
    require 'yui/compressor'

    def self.filetype
      '.js'
    end

    def compress
      return YUI::JavaScriptCompressor.new(munge: true).compress(@content)
    end
  end

  #hack the gem to have the JS asset tag output the filepath and not a
  #tag, so we can defer loading.
  class JavaScriptTagTemplate < JAPR::Template
    def self.filetype
      '.js'
    end

    def self.priority
      -1
    end

    def html
      @path + '/' + @filename
    end
  end

  class CssTagTemplate < JAPR::Template
    def self.filetype
      '.css'
    end

    def self.priority
      -1
    end

    def html
      @path + '/' + @filename
    end
  end
end

