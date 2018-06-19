import React from 'react';
import Search from '../Search';
import BreadCrumbs from '../BreadCrumbs';
import './NavSub.scss';


const withSubNav = (args = { showBreadCrumbs: true }) => Page => props => (
  <div>
    <div className="nav-sub">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-8">
            {args.showBreadCrumbs &&
              <BreadCrumbs {...props} />
            }
          </div>
          <div className="col-md-4">
            <Search />
          </div>
        </div>
      </div>
    </div>
    <Page {...props} />
  </div>
);


export default withSubNav;
