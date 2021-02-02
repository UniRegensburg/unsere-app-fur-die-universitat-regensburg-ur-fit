import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./components/navigation/ProtectedRoute";
import CategoryList from "./components/pages/CategoryList";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" component={Homescreen} />
          <ProtectedRoute exact path="/home" component={Homescreen} />
          <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
          <ProtectedRoute exact path="/relaxation" component={CategoryList} />
          <ProtectedRoute exact path="/fitness" component={CategoryList} />
          <ProtectedRoute exact path="/wellbeing" component={CategoryList} />
          <ProtectedRoute exact path="/nutrition" component={CategoryList} />
          <Route exact path="/login" component={Loginscreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
