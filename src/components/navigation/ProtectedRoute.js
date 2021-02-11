import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
