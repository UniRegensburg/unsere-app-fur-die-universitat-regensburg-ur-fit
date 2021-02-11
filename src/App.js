import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from "./components/navigation/ProtectedRoute";
import { UserProvider } from "./components/hooks/useUser";

import CategoryList from "./components/pages/CategoryList";
import Feedbackscreen from "./components/pages/Feedbackscreen";
import Homescreen from "./components/pages/Homescreen";
import Loginscreen from "./components/pages/Loginscreen";
import Contentlistscreen from "./components/pages/Contentlistscreen";
import Detailscreen from "./components/pages/Detailscreen";
import Mensascreen from "./components/pages/Mensascreen";

import * as Constants from "./constants/constants";

const categories = [
  Constants.pages.relaxation,
  Constants.pages.fitness,
  Constants.pages.wellbeing,
  Constants.pages.nutrition,
];

function App() {
  return (
    <UserProvider>
      <Router>
        <div data-testid="app" className="App">
          <Switch>
            <Route exact path="/" component={Homescreen} />
            <Route exact path="/login" component={Loginscreen} />
            <ProtectedRoute exact path="/feedback" component={Feedbackscreen} />
            <ProtectedRoute
              exact
              path="/nutrition/mensa"
              component={Mensascreen}
            />
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

            <ProtectedRoute
              exact
              path="/video"
              component={(routerProps) => (
                <Detailscreen {...routerProps} id={"video-test"} />
              )}
            />
            <ProtectedRoute
              exact
              path="/text"
              component={(routerProps) => (
                <Detailscreen {...routerProps} id={"text-test"} />
              )}
            />
          <ProtectedRoute
            exact
            path="/audio"
            component={(routerProps) => (
              <Detailscreen {...routerProps} id={"audio-test"} />
              )}
            />

          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
