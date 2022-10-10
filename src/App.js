import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is the home page
      </Route>
      <Route exact path="/hi">
        HI SOHAN
      </Route>
      <Route exact path="/hello">
        HELLO GUYZZZZZ
      </Route>

      <Route>Undefined Page. 404 Error</Route>
    </Switch>
  );
}

export default App;
