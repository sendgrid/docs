import { Link } from 'gatsby';
import React from 'react';

function Group({ edges }) {
  return (
    <div className="group-links">
      {edges.map((doc) => {
        const {
          permalink,
          title,
        } = doc.node.fields;

        const docIsVisible = !!doc.node.frontmatter.navigation.show;

        return docIsVisible
          ? (
            <Link
              key={permalink}
              to={permalink}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )
          : null;
      })}
    </div>
  );
}

export default Group;
