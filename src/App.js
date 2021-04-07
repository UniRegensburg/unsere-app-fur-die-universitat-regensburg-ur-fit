import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import { ContextProvider } from "./components/hooks/contextProvider";

import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";
import Imprintscreen from "./components/pages/Imprintscreen";
import ConditionsOfUseScreen from "./components/pages/ConditionsOfUsescreen";
import Uploadscreen from "./components/pages/Uploadscreen";
import Settingsscreen from "./components/pages/Settingsscreen";

import {
  Category,
  Content,
  Subcategory,
} from "./components/navigation/UrlParamsHelper";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div data-testid="app" className="App">
          <Switch>
            <ProtectedRoute exact path="/" component={Homescreen} />
            <Route exact path="/login" component={Loginscreen} />
            <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
            <ProtectedRoute exact path="/settings" component={Settingsscreen} />
            <ProtectedRoute exact path="/imprint" component={Imprintscreen} />
            <ProtectedRoute
              exact
              path="/conditions"
              component={ConditionsOfUseScreen}
            />
            <ProtectedRoute
              exact
              path="/category/:category"
              component={Category}
            />
            <ProtectedRoute
              exact
              path="/content/:contentId"
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
            <ProtectedRoute exact path="/upload" component={Uploadscreen} />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
