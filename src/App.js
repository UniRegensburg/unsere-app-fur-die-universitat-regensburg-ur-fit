import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import CategoryList from "./components/pages/CategoryList";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";
import ContentDetailscreen from "./components/pages/ContentDetailscreen";
import Contentlistscreen from "./components/pages/Contentlistscreen";

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
          <Route exact path="/content" component={ContentDetailscreen} />
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

          {categories.map((category) => {
            return category.subcategories.map((subcategory, index) => {
              return (
                <ProtectedRoute
                  exact
                  path={subcategory.value}
                  key={index}
                  component={(routerProps) => (
                    <Contentlistscreen
                      {...routerProps}
                      title={subcategory.title}
                    />
                  )}
                />
              );
            });
          })}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
