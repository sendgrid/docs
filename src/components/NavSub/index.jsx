import React from 'react';
import Search from '../Search';
import BreadCrumbs from '../BreadCrumbs';
import './NavSub.scss';

const SubNav = (props) => (
  <div>
    <div className="nav-sub">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-8">
          <BreadCrumbs {...props} />
          </div>
          <div className="col-md-4">
            <Search />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubNav;
