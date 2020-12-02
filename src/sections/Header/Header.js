import React from 'react';
import languages from '../../languages';
import { useMediaPredicate } from 'react-media-hook';
import DesktopMenue from '../../components/DesktopMenue/DesktopMenue';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Timer from '../../components/Timer/Timer';
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
            <div className="Main__buttons-container">
              <button className="Main__buttons-action">
                {languages.eng.bookTable}
              </button>
              <button className="Main__buttons-action">
                {languages.eng.explore}
              </button>
            </div>
          </div>
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
