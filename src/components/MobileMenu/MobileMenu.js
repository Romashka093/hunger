import React from 'react';
import languages from '../../languages';
import logo from '../../assets/img/logo.svg';
import Menu from './Menu/Menu';
import './MobileMenu.scss';

function MobileMenu({ handleOpenMenu, isOpenMenu }) {
  return (
    <>
      <nav className="Navigation">
        <div className="Navigation__container">
          <div className="Navigation__logo">
            <h1 className="Navigation__logo-item">
              <a
                className="Navigation__logo-item-link"
                href={`#${languages.eng.home}`}
              >
                <img
                  className="Navigation__logo-img"
                  src={logo}
                  alt=""
                  width="40"
                  height="40"
                />
              </a>
            </h1>
          </div>
          <div onClick={handleOpenMenu} className="Navigation__burger">
            <button name="openMenu" className="Navigation__burger-btn" />
            <span className="Navigation__burger-bar" />
          </div>
        </div>
      </nav>
      {isOpenMenu && (
        <Menu isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
      )}
    </>
  );
}

export default MobileMenu;
