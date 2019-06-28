import React from 'react';
import NavMain from '../NavMain';
import StatusPage from '../StatusPage';
import Footer from '../Footer';
import withUser from '../withUser';
import SubNav from '../NavSub';
import '../../scss/style-guide.scss';

function MainLayout(props) {
  const {
    children,
    location,
    subNav,
  } = props;

  const pathClass = location.pathname.replace(/\/docs\\|\//g, '');
  const classNames = `docSearch-content docs-wrap ${pathClass}`;
  const renderFooter = location.pathname.indexOf('/api-reference') === -1 ? <Footer /> : null;

  return (
    <div className={classNames}>
      <StatusPage />
      <div className={subNav ? 'nav-wrap has-sub-nav' : 'nav-wrap'}>
        <NavMain />
        {subNav && <SubNav {...props} />}
      </div>
      <div className="layout-content">
        {children}
      </div>
      {renderFooter}
    </div>
  );
}

export default withUser(MainLayout);
