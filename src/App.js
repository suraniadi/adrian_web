import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
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
            <Routes>
              <Route path="/" exact element={<Landing/>} />
              <Route elem = {<Navigate to="/" />} />
            </Routes>
          </Router>
        </HelmetProvider>
      </>
    );
  }
}

export default App;
