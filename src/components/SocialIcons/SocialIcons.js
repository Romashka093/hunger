import React from 'react';
import facebook from '../../assets/img/social/facebook.svg';
import twitter from '../../assets/img/social/twitter.svg';
import instagram from '../../assets/img/social/instagram.svg';
import './SocialIcons.scss';

function SocialIcons() {
  return (
    <>
      {' '}
      <ul className="Social">
        <li className="Social__icon">
          {/* eslint-disable-next-line */}
          <a href="https://www.facebook.com/" target="_blank">
            <img className="Social__icon-svg" src={facebook} alt="facebook" />
          </a>
        </li>
        <li className="Social__icon">
          {/* eslint-disable-next-line */}
          <a href="https://twitter.com/" target="_blank">
            <img className="Social__icon-svg" src={twitter} alt="twitter" />
          </a>
        </li>
        <li className="Social__icon">
          {/* eslint-disable-next-line */}
          <a href="https://www.instagram.com/" target="_blank">
            <img className="Social__icon-svg" src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialIcons;
