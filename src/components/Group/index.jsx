import Link from 'gatsby-link';
import React from 'react';

const Group = props => (
  <div className="group-links">
    {props.edges.map((doc) => {
      const {
        permalink,
        title,
      } = doc.node.fields;

      return (
        <Link key={permalink} to={permalink}>{title}</Link>
      );
    })}
  </div>
);

export default Group;

