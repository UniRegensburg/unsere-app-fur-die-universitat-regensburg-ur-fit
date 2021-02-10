import React, { useState, useEffect, useContext, createContext } from "react";
import auth from "../services/authentication";

const userContext = createContext();

// Provider component that wraps your app and makes user object ...
// ... available to any child component that calls useUser().
export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: "initialising" });

  // Subscribe to firebase user state changes on mount
  // Because this sets state in the callback it will cause any
  // component that utilizes this hook to re-render with the
  // latest user object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

// Hook for child components to get the user object and re-render when it changes.
export const useUser = () => {
  return useContext(userContext);
};
