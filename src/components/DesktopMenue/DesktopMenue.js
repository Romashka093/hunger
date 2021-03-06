import React from 'react';
import languages from '../../languages';
import logo from '../../assets/img/logo.svg';
import './DesktopMenue.scss';

function DesktopMenue() {
  return (
    <>
      <header className="DesktopMenue">
        <nav className="DesktopMenue__navigation">
          <ul className="DesktopMenue__navigation-list">
            <li className="DesktopMenue__navigation-list-item">
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.home}`}
              >
                {languages.eng.home}
              </a>
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.about}`}
              >
                {languages.eng.about}
              </a>
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.team}`}
              >
                {languages.eng.team}
              </a>
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.booking}`}
              >
                {languages.eng.booking}
              </a>
            </li>
            <h1 className="DesktopMenue__navigation-logo">
              <a href={`#${languages.eng.home}`}>
                <img src={logo} alt="" width="140" height="140" />
              </a>
            </h1>
            <li className="DesktopMenue__navigation-list-item">
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.menu}`}
              >
                {languages.eng.menu}
              </a>
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.galerie}`}
              >
                {languages.eng.galerie}
              </a>
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.events}`}
              >
                {languages.eng.events}
              </a>
              <a
                className="DesktopMenue__navigation-list-item-link"
                href={`#${languages.eng.contact}`}
              >
                {languages.eng.contact}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default DesktopMenue;
