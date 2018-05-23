import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, IndexRoute, hashHistory, Switch } from 'react-router-dom';
import Main from 'Main';
import Images from 'Images';
import Favorites from 'Favorites';

ReactDOM.render(
<HashRouter history={hashHistory}>
  <Main>
    <Switch>
      <Route path="/" exact component={Images} />
      <Route path="/favorites" exact component={Favorites} />
    </Switch>
  </Main>
</HashRouter>,
document.getElementById('app'));
