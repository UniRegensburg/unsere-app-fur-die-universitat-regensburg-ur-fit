import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./components/navigation/ProtectedRoute";
import CategoryList from "./components/pages/CategoryList";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";

import * as Constants from "./constants/constants";

const categories = [
  Constants.pages.relaxation,
  Constants.pages.fitness,
  Constants.pages.wellbeing,
  Constants.pages.nutrition,
];

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/login" component={Loginscreen} />
          <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />

          {categories.map((category) => {
            return (
              <ProtectedRoute
                exact
                path={category.value}
                key={category.key}
                component={(routerProps) => (
                  <CategoryList
                    {...routerProps}
                    title={category.title}
                    categories={category.subcategories}
                  />
                )}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
