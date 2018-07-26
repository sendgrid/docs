import React from 'react';

export default class NoHeaderFooter extends React.Component {
  render() {
    const {
      children,
      location,
    } = this.props;
    const pathClass = location.pathname.replace(/\//g, '');
    const classNames = `docSearch-content docs-wrap ${pathClass}`;

    return (
      <div className={classNames}>
        {children()}
      </div>
    );
  }
}
