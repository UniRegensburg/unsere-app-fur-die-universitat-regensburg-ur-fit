import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../hooks/useAuthState";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userId = useAuthState();
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? (
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
