import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/login" component={Loginscreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
