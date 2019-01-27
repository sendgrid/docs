import React from 'react';
import LIBRARIES from '../../constants/libraries';
import './libaries.scss';

function Libaries() {
  return(
    <div className="for-devs-libraries container ta-center">
      <div className="card is-centered">
        <h2>Open Source Libraries</h2>
        <div className="is-p">Prebuilt libraries and sample code for popular languages.</div>
        <div className="for-devs-libraries__languages">
          {LIBRARIES.map(({ NAME, IMG, URL }) => (
              <div key={NAME} className="for-devs-libraries__lang">
                <a className="for-devs-libraries__lang-link" key={NAME} href={URL} rel="noopener noreferrer" target="_blank">
                  <img src={IMG} alt={NAME} />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Libaries;
