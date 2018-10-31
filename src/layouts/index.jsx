import React from 'react';
import NavMain from '../components/NavMain';
import StatusPage from '../components/StatusPage';
import Footer from '../components/Footer';
import '../scss/style-guide.scss';

export default function MainLayout(props) {
    const {
      children,
      location,
    } = props;

    const pathClass = location.pathname.replace(/\/docs\\|\//g, '');
    const classNames = `docSearch-content docs-wrap ${pathClass}`;
    const renderFooter = location.pathname.indexOf('/api-reference') === -1 ? <Footer /> : null;

    return (
      <div className={classNames}>
        <StatusPage />
        <NavMain />
        {children()}
        {renderFooter}
      </div>
    );
}