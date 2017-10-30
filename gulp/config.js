var src               = 'source';
var build             = 'public';
var development       = 'public/development';
var production        = 'public';
var srcAssets         = 'source/_assets';
var developmentAssets = 'public/assets';
var productionAssets  = 'public/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '*.{css,js}',
      ]
    }
  },
  delete: {
    src: [developmentAssets]
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    }
  },
  less: {
    src:  srcAssets + '/stylesheets/app.less',
    dest: developmentAssets,
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true
    }
  },
  scripts: {
    src:  srcAssets + '/bower_components/jquery/dist/jquery.min.js',
    src:  srcAssets + '/bower_components/jstorage/jstorage.min.js',
    src:  srcAssets + '/bower_components/modernizr/modernizr.js',
    src:  srcAssets + '/bower_components/bootstrap/dist/js/bootstrap.min.js',
    src:  srcAssets + '/bower_components/jsrender/jsrender.js',
    src:  srcAssets + '/bower_components/highlightjs/highlight.pack.js',
    src:  srcAssets + '/bower_components/jquery-cookie/jquery.cookie.js',
    src:  srcAssets + '/javascripts/**/*.js',
    dest: developmentAssets
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  watch: {
    jekyll: [
      '_config.yml',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html'
    ],
    less:    srcAssets + '/stylesheets/**/*.less',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*'
  },
  lesslint: {
    src: [
      srcAssets + '/stylesheets/**/*.less'
      ],
      options: {
        bundleExec: true
      }
  },
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  },
  optimize: {
    css: {
      src:  developmentAssets + '/*.css',
      src:  srcAssets + '/bower_components/highlightjs/styles/default.css',
      dest: productionAssets,
      options: {
        keepSpecialComments: 0
      }
    }
  }
  // revision: {
  //   src: {
  //     assets: [
  //       productionAssets + '/*.css'
  //     ],
  //     base: production
  //   },
  //   dest: {
  //     assets: production,
  //     manifest: {
  //       name: 'manifest.json',
  //       path: productionAssets
  //     }
  //   }
  // },
  // collect: {
  //   src: [
  //     productionAssets + '/manifest.json',
  //     production + '/*.{html,xml,txt,json,css,js}',
  //     '!' + production + '/feed.xml'
  //   ],
  //   dest: production
  // }
};
