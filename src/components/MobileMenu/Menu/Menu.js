import React from 'react';
import languages from '../../../languages';
import facebook from '../../../assets/img/social/facebook.svg';
import twitter from '../../../assets/img/social/twitter.svg';
import instagram from '../../../assets/img/social/instagram.svg';
import './Menu.scss';

function Menu({ isOpenMenu, handleOpenMenu }) {
  return (
    <div className="Mobile">
      <div
        className={
          isOpenMenu ? 'Mobile__navigation' : 'Mobile__navigation-close'
        }
      >
        <div className="Mobile__navigation-container">
          <ul onClick={handleOpenMenu} className="Mobile__navigation-list">
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.home}`}
              >
                {languages.eng.home}
              </a>
            </li>
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.about}`}
              >
                {languages.eng.about}
              </a>
            </li>
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.team}`}
              >
                {languages.eng.team}
              </a>
            </li>
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.booking}`}
              >
                {languages.eng.booking}
              </a>
            </li>

            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.menu}`}
              >
                {languages.eng.menu}
              </a>
            </li>
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.galerie}`}
              >
                {languages.eng.galerie}
              </a>
            </li>
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.events}`}
              >
                {languages.eng.events}
              </a>
            </li>
            <li className="Mobile__navigation-list-item">
              <a
                className="Mobile__navigation-list-item-link"
                href={`#${languages.eng.contact}`}
              >
                {languages.eng.contact}
              </a>
            </li>
            <ul className="Social">
              <li className="Social__icon">
                {/* eslint-disable-next-line */}
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    className="Social__icon-svg"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
              </li>
              <li className="Social__icon">
                {/* eslint-disable-next-line */}
                <a href="https://twitter.com/" target="_blank">
                  <img
                    className="Social__icon-svg"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="Social__icon">
                {/* eslint-disable-next-line */}
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    className="Social__icon-svg"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
            <div className="Working">
              <div className="Working__hours">{`${languages.eng.workingWeekDays} ${languages.eng.workingWeekHours}, ${languages.eng.workingWeekendsHours} ${languages.eng.workingWeekendsDays}`}</div>
            </div>
          </ul>
          <div onClick={handleOpenMenu} className="Navigation__burger">
            <button name="openMenu" className="Navigation__burger-btn" />
            <span
              className={
                !isOpenMenu
                  ? 'Navigation__burger-bar'
                  : 'Navigation__burger-close'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
