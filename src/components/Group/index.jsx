import Link from 'gatsby-link';
import React from 'react';

function Group(props) {
  return (
    <div className="group-links">
      {props.edges.map(doc => {
        const {
          permalink,
          title,
        } = doc.node.fields;

        const docIsVisible = !!doc.node.frontmatter.navigation.show;
        return docIsVisible 
                ? <Link key={permalink} to={permalink} dangerouslySetInnerHTML={{ __html: title }} /> 
                : null;
      })}
    </div>
  );
}

export default Group;

