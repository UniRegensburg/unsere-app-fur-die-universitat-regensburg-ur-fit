import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";
import {
  Category,
  Content,
  Subcategory,
} from "./components/navigation/UrlParamsHelper";

function App() {
  return (
    <Router>
      <div data-testid="app" className="App">
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/login" component={Loginscreen} />
          <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
          <ProtectedRoute
            exact
            path="/category/:category"
            component={Category}
          />
          <ProtectedRoute
            exact
            path="/favorites/:contentId"
            component={Content}
          />
          <ProtectedRoute
            exact
            path="/category/:category/:subcategory"
            component={Subcategory}
          />
          <ProtectedRoute
            exact
            path="/category/:category/:subcategory/:contentId"
            component={Content}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
