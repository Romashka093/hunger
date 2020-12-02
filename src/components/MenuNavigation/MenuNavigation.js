import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import languages from '../../languages';
import './MenuNavigation.scss';

function MenuNavigation() {
  const handleClick = evt => {
    console.log(evt.target);
  };
  return (
    <>
      <div className="Menu__navigation">
        <ul className="Menu__navigation-list">
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.main}
              exact
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.soupe}
            </NavLink>
          </li>
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.pizza}
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.pizza}
            </NavLink>
          </li>
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.pasta}
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.pasta}
            </NavLink>
          </li>
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.desert}
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.desert}
            </NavLink>
          </li>
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.wine}
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.wine}
            </NavLink>
          </li>
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.beer}
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.beer}
            </NavLink>
          </li>
          <li className="Menu__navigation-list-item">
            <NavLink
              className="Menu__navigation-list-item-link"
              to={routes.drinks}
              onClick={handleClick}
              activeClassName="Menu__navigation-list-item-active"
            >
              {languages.eng.drinks}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuNavigation;
