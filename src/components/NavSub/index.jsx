import React, { Component } from 'react';
import Search from '../Search';
import BreadCrumbs from '../BreadCrumbs';
import './NavSub.scss';

const NavSub = () => (
  <div className="nav-sub">
    <div className="container-lg">
      <div className="row">
        <div className="col-md-8">
          <BreadCrumbs />
        </div>
        <div className="col-md-4">
          <Search />
        </div>
      </div>
    </div>
  </div>
);


export default NavSub;
