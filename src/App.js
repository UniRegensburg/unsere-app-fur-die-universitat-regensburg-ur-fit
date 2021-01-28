import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import Relaxationscreen from "./components/pages/Relaxationscreen";
import Fitnessscreen from "./components/pages/Fitnessscreen";
import Wellbeingscreen from "./components/pages/Wellbeingscreen";
import Nutritionscreen from "./components/pages/Nutritionscreen";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* This will be the login screen */}
          <Route exact path="/" component={Homescreen} />
          <ProtectedRoute exact path="/home" component={Homescreen} />
          <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
          <ProtectedRoute
            exact
            path="/relaxation"
            component={Relaxationscreen}
          />
          <ProtectedRoute exact path="/fitness" component={Fitnessscreen} />
          <ProtectedRoute exact path="/wellbeing" component={Wellbeingscreen} />
          <ProtectedRoute exact path="/nutrition" component={Nutritionscreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
