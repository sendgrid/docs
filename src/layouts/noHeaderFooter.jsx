import React from 'react';

export default function NoHeaderFooter(props) {
  const {
    children,
    location,
  } = props;
  
  const pathClass = location.pathname.replace(/\/docs\\|\//g, '');
  const classNames = `docSearch-content docs-wrap ${pathClass}`;

  return (
    <div className={classNames}>
      {children()}
    </div>
  );
}
