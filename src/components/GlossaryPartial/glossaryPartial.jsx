import React, { Component } from 'react';
import './GlossaryPartial.scss';

class GlossaryPartial extends Component {
  static getLinks(link) {
    return link.map((item) => {
      if (item.URL) {
        return <a key={item.TEXTNODE} className="glossary-link" href={item.URL}>{item.TEXTNODE}</a>;
      }
    });
  }

  render() {
    const {
      HEADER,
      LINKS,
      BUTTON_LINK,
      IMAGE,
    } = this.props.data;

    return (
      <div className="home-glossary">
        <div className="container home-glossary__container">
          <div className="row">
            <div className="col-md-12">
              <h2>Glossary</h2>
              <p className="ta-center">Not sure what something means? Find terms from our library sorted A-Z.</p>
              <div className="row">
                <div className="col-md-8">
                  <div className="card card--glossary is-thin">
                    <h3 className="card__title">{HEADER}</h3>
                    { GlossaryPartial.getLinks(LINKS) }
                    <a className="btn btn-primary" href={BUTTON_LINK}>View All</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="glossary-icon" src={IMAGE} alt="SendGrid Glossary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlossaryPartial;
