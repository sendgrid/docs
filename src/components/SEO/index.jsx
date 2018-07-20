import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';

class SEO extends Component {
  render() {
    const { postNode, postType } = this.props;
    const image = config.siteLogo;
    const sitePath = config.siteUrl + config.pathPrefix;

    // These will be set differently for a doc or page
    let title;
    let permalink;
    let description = false;

    if (postType === 'category') {
      const {
        docType,
        category,
      } = postNode.pathContext;

      title = `${docType.replace('-', ' ').cap} | ${category.replace('-', ' ')}`;
    } else if (postType === 'doc') {
      const { seo } = postNode.frontmatter;
      permalink = sitePath + postNode.fields.permalink;

      if (seo) {
        title = seo.title ? seo.title : postNode.title;
        description = seo.description ? seo.description : false;
      } else {
        ({ title } = postNode.fields);
      }
    } else {
      permalink = sitePath + postNode.location.pathname;
      ({ title } = this.props);
      ({ description } = this.props);
    }

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: sitePath,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
      {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: permalink,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      },
    ];

    return (
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={permalink} />
        {postType === 'doc' ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        {description ? <meta property="og:description" content={description} /> : null}
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
}

export default SEO;
