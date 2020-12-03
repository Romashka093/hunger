import React from 'react';
import languages from '../../../languages';
import SocialIcons from '../../SocialIcons';
import WorkingHours from '../../WorkingHours';

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
            <SocialIcons />
            <WorkingHours />
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
