const config = require('./data/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const policyAccess = process.env.GATSBY_ENV === 'production' ? [{ userAgent: '*', allow: ['/'] }] : [{ userAgent: '*', disallow: ['/'] }];

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/content/${config.docsDir}`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl + pathPrefix,
        sitemap: `${config.siteUrl}/docs/sitemap.xml`,
        policy: policyAccess,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PQC59L',
        includeInDevelopment: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'sendgrid-remark-code-in-html',
          'sendgrid-remark-paths',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-autolink-headers',
          'sendgrid-remark-headers',
          'sendgrid-remark-tables',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: '1CjnBNPybWzyv10ssZRxdwmb8vrYF4yj',
        devKey: 'QaZKJjbUWrCqNO0ObRrF64qDRVE40ZIr',
        // This is done via GTM.
        trackPage: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/brand/sg-mark.png',
            sizes: '771x724',
            type: 'image/png',
          },
        ],
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
