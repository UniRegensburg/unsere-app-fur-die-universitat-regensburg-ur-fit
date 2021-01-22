import React from "react";
import "./App.css";
import Homescreen from "./components/pages/Homescreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homescreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
