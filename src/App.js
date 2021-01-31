import FirebaseInit from "./services/firebase-initialisation"

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";

function App() {
  FirebaseInit.init();
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* This will be the login screen */}
          <Route exact path="/" component={Homescreen} />
          <ProtectedRoute exact path="/home" component={Homescreen} />
          <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
