import React from 'react';
import routes from './routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import Hunger from './page/Hunger';

function App() {
  return (
    <Switch>
      <Route path={routes.main} exact component={Hunger} />
      <Route path={routes.main} component={Hunger} />
      <Route path={routes.pizza} component={Hunger} />
      <Route path={routes.pasta} component={Hunger} />
      <Route path={routes.desert} component={Hunger} />
      <Route path={routes.wine} component={Hunger} />
      <Route path={routes.beer} component={Hunger} />
      <Route path={routes.drinks} component={Hunger} />
      <Redirect to={routes.main} />
    </Switch>
  );
}

export default App;
