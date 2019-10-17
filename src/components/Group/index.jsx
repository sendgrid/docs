import { Link } from 'gatsby';
import React from 'react';
import _ from 'lodash';

function Group(props) {
  const sort = _.sortBy(props.edges, [function (o) { return o.node.frontmatter.order; }]);
  return (
    <div className="group-links">
      {sort.map((doc) => {
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
