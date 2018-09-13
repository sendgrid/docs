import React from 'react';
import LIBRARIES from '../../constants/libraries';
import './libaries.scss';

const Libaries = () => (
  <div className="for-devs-libraries container ta-center">
    <div className="card is-centered">
      <h2>Open Source Libraries</h2>
      <div className="is-p">Prebuilt libraries and sample code for popular languages.</div>
      <div className="for-devs-libraries__languages">
        {LIBRARIES.map(lib => (
            <div key={lib.NAME} className="for-devs-libraries__lang">
              <a className="for-devs-libraries__lang-link" key={lib.NAME} href={lib.URL} rel="noopener noreferrer" target="_blank">
                <img src={lib.IMG} alt={lib.NAME} />
              </a>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Libaries;
