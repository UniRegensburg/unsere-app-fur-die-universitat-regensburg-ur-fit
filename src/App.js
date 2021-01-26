import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Fitnessscreen from "./components/pages/Fitnessscreen";
import Nutritionscreen from "./components/pages/Nutritionscreen";
import WellBeingscreen from "./components/pages/WellBeingscreen";
import Relaxationscreen from "./components/pages/Relaxationscreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* This will be the login screen */}
          <Route exact path="/" component={Homescreen} />
          <ProtectedRoute exact path="/home" component={Homescreen} />
          <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
          <ProtectedRoute exact path="/fitness" component={Fitnessscreen} />
          <ProtectedRoute exact path="/nutrition" component={Nutritionscreen} />
          <ProtectedRoute exact path="/wellbeing" component={WellBeingscreen} />
          <ProtectedRoute
            exact
            path="/relaxation"
            component={Relaxationscreen}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
