require 'jekyll_asset_pipeline'

module JekyllAssetPipeline
  class LessConverter < JekyllAssetPipeline::Converter
    require 'less'

    def self.filetype
      '.less'
    end

    def convert
      parser = Less::Parser.new
      return parser.parse(@content).to_css
    end
  end

  class CssCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      return YUI::CssCompressor.new.compress(@content)
    end
  end

  class JavaScriptCompressor < JekyllAssetPipeline::Compressor
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
  class JavaScriptTagTemplate < JekyllAssetPipeline::Template
    def self.filetype
      '.js'
    end

    def self.priority
      -1
    end

    def html
      "#{@path}/#{@filename}"
    end
  end
end

