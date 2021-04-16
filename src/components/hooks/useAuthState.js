import React, { useState, useEffect, useContext, createContext } from "react";
import auth from "../services/authService";

const authStateContext = createContext();

// Provider component that wraps your app and makes user object ...
// ... available to any child component that calls useUser().
export function AuthStateProvider({ children }) {
  const [userId, setUserId] = useState("initialising");

  // Subscribe to firebase user state changes on mount
  // Because this sets state in the callback it will cause any
  // component that utilizes this hook to re-render with the
  // latest user object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userId) => {
      if (userId) {
        setUserId(userId);
      } else {
        setUserId(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <authStateContext.Provider value={userId}>
      {children}
    </authStateContext.Provider>
  );
}

// Hook for child components to get the user object and re-render when it changes.
export const useAuthState = () => {
  return useContext(authStateContext);
};
