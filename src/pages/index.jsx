import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title={config.siteTitle} />
        <div className="search-hero">
          <h1>Get Help Using SendGrid</h1>
          <div className="input-text-wrap">
            <label
              className="input-text-label"
              for="input-text-example-default"
            >
              Username
            </label>
            <input type="text" id="input-text-example-default" />
          </div>
        </div>
      </div>
    )
  }
}

export default Index
