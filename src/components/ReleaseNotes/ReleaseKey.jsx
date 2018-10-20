import React from 'react';

function ReleaseKey() {
  return(
    <div className="release-notes-key m-bottom-8">
      <div className="release-notes-key__icon is-size-h5">
        <div className="icon-ui" />
        UI Update
      </div>
      <div className="release-notes-key__icon">
        <div className="icon-api" />
        API Update
      </div>
      <div className="release-notes-key__icon">
        <div className="icon-partners" />
        Partners Update
      </div>
      <div className="release-notes-key__icon">
        <div className="icon-price" />
        Price Update
      </div>
    </div>
  );
}

export default ReleaseKey;
