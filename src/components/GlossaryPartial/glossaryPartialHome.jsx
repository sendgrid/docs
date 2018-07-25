import React, { Component } from 'react';
import GLOSSARY_TERMS from '../../constants/gloassaryTerms';
import './GlossaryPartial.scss';

class GlossaryPartialHome extends Component {
  static renderMenu(menu) {
    const links = menu.LINKS.map((item) => {
      if (item.URL) {
        return <a key={item.TEXTNODE} className="glossary-link" href={item.URL}>{item.TEXTNODE}</a>;
      }

      return <a key={item.TEXTNODE} className="btn btn-primary" href={item.BUTTON_LINK}>View All</a>;
    });

    return (
      <div className="container home-glossary__container">
        <div className="row">
          <div className="col-md-12">
            <h2>Glossary</h2>
            <p className="ta-center">Not sure what something means? Find terms from our library sorted A-Z.</p>
            <div className="row">
              <div className="col-md-8">
                <div className="card card--glossary is-thin">
                  <h3 className="card__title">{menu.HEADER}</h3>
                  { links }
                </div>
              </div>
              <div className="col-md-4">
                <img className="glossary-icon" src={menu.IMAGE} alt="SendGrid Glossary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="home-glossary">
        {GlossaryPartialHome.renderMenu(GLOSSARY_TERMS.HOME)}
      </div>
    );
  }
}

export default GlossaryPartialHome;
