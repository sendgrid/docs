import React from 'react';
import './Rating.scss';
import { AuthCtx } from '../withUser';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.ratingVals = [
      1, 2, 3, 4, 5
    ];

    this.state = {
      rating: 0,
      hasRating: false,
    }
  }

  componentDidMount() {
    this.dataLayer = window.dataLayer || [];
  }

  rateDoc = user => (e) => {
    const rating  = parseInt( e.target.dataset.rating );
    const userID = user ? user.userid : false;


    this.setState({
      rating,
      hasRating: true,
    })

    analytics.track("Doc Rated", {
      docID: window.location.pathname,
      userID, // SendGrid userID or false
      rating
    });
  }

  getStars() {
    return this.ratingVals.map(rating => {
      const isSelected = rating <= this.state.rating ? 'is-selected' : '';
      return (
        <span key={rating} className={isSelected} data-rating={rating}>☆</span>
      )
    });
  }

  render() {
    return (
      <div className="rate-this-doc">
          <AuthCtx.Consumer>
            {(ctx) => (
              <React.Fragment>
                <div className="rating" onClick={this.rateDoc(ctx.user)}>
                  {this.getStars()}
                </div>
              </React.Fragment>
            )}
          </AuthCtx.Consumer>
      </div>
    );
  }
}

export default Rating;
