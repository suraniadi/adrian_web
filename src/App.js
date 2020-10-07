import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Landing from "./pages/Landing";

class App extends React.Component {
  render() {
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Adrian Surani</title>
          </Helmet>
          <Router>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </HelmetProvider>
      </>
    );
  }
}

export default App;
