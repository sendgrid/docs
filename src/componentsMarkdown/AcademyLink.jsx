import React from 'react';

export default function AcademyLink(props) {
  // check for empty AcademyLink
  if (!props.children) {
    return null;
  }

  return (
    <div>
      AcademyLink
    </div>
  );
}

AcademyLink.defaultProps = {
  type: 'info',
};
