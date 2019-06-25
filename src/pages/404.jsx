import React from 'react';
import { Link } from 'gatsby';
import './404.scss';
import NoHeaderFooter from '../components/layout/NoHeaderFooter';

function NotFound({ location }) {
  return (
    <NoHeaderFooter location={location}>
      <div className="puppy-wrap">
        <div className="container ta-center">
          <div className="row not-found-content">
            <div className="col-lg-8 col-offset-lg-2 col-md-8 col-offset-md-2 col-sm-12">
              <h1>404 not found</h1>
              <div className="m-bottom-8">Looks like you’ve fallen off the grid.</div>
              <Link className="btn btn-secondary" to="/">Return to Knowledge Center</Link>
            </div>
          </div>
        </div>
      </div>
    </NoHeaderFooter>
  );
}

export default NotFound;
