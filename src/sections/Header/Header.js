import React from 'react';
import languages from '../../languages';
import { useMediaPredicate } from 'react-media-hook';
import DesktopMenue from '../../components/DesktopMenue';
import MobileMenu from '../../components/MobileMenu';
import Timer from '../../components/Timer';
import WorkingHours from '../../components/WorkingHours';
import SocialIcons from '../../components/SocialIcons';
import './Header.scss';

function Header({ handleOpenMenu, isOpenMenu, minutes, seconds }) {
  const tablet = useMediaPredicate('(min-width: 1024px)');
  return (
    <>
      <header className="Header">
        <div className="Header__container">
          {!tablet ? (
            <MobileMenu
              isOpenMenu={isOpenMenu}
              handleOpenMenu={handleOpenMenu}
            />
          ) : (
            <DesktopMenue />
          )}
        </div>
        <Timer minutes={minutes} seconds={seconds} />

        <section id={`#${languages.eng.home}`} className="Main">
          <p className="Main__header-name">{languages.eng.restaurant}</p>
          <h2 className="Main__header">{languages.eng.restaurantName}</h2>
          <div className="Main__buttons">
            <ul className="Main__buttons-container">
              <li className="Main__buttons-action">
                <a href={`#${languages.eng.booking}`}>
                  <p className="Main__buttons-action-lable">
                    {languages.eng.bookTable}
                  </p>
                </a>
              </li>
              <li className="Main__buttons-action">
                <a href={`#${languages.eng.menu}`}>
                  <p className="Main__buttons-action-lable">
                    {languages.eng.explore}
                  </p>
                </a>
              </li>
            </ul>
          </div>
          {tablet && (
            <div className="Main__social">
              <WorkingHours /> <SocialIcons />
            </div>
          )}
        </section>
        <div className="Down">
          <a href={`#${languages.eng.booking}`}>
            <button className="Down__btn"></button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
