import React, { Component } from 'react';
import Link from 'gatsby-link';
import LINKS from '../../constants/pageLinks';
import './GlossaryPartial.scss';

class GlossaryPartial extends Component {
  static getLinks(anchors) {
    return anchors.map(anchor => <p key={anchor.TEXTNODE} className="glossary-link"><Link to={anchor.URL}>{anchor.TEXTNODE}</Link></p>);
  }

  render() {
    const {
      HEADER,
      ANCHORS,
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
                  <div className="card card--glossary">
                    <h3 className="card__title">{HEADER}</h3>
                    { GlossaryPartial.getLinks(ANCHORS) }
                    <Link className="btn btn-primary" to={LINKS.GLOSSARY}>View All</Link>
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
