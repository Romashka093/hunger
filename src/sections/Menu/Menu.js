import React from 'react';
import { Route, Switch } from 'react-router-dom';
import languages from '../../languages';
import routes from '../../routes';
import MenuNavigation from '../../components/MenuNavigation';
import MenuList from '../../components/MenuList';
import './Menu.scss';

function Menu({ menu }) {
  return (
    <section className="Menu" id={languages.eng.menu}>
      <h2 className="Menu__header">{languages.eng.restaurantMenu}</h2>
      <p className="Menu__description">{languages.eng.menuDescription}</p>
      <MenuNavigation />
      <ul className="Menu__list">
        <Switch>
          <Route
            exact
            path={routes.main}
            render={() => <MenuList menuList={menu.soupe} />}
          />
          <Route
            path={routes.pizza}
            render={() => <MenuList menuList={menu.pizza} />}
          />
          <Route
            path={routes.pasta}
            render={() => <MenuList menuList={menu.pasta} />}
          />
          <Route
            path={routes.desert}
            render={() => <MenuList menuList={menu.desert} />}
          />
          <Route
            path={routes.wine}
            render={() => <MenuList menuList={menu.wine} />}
          />
          <Route
            path={routes.beer}
            render={() => <MenuList menuList={menu.beer} />}
          />
          <Route
            path={routes.drinks}
            render={() => <MenuList menuList={menu.drinks} />}
          />
        </Switch>
      </ul>
    </section>
  );
}

export default Menu;
