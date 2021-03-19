import React, { useState, useEffect, createContext } from "react";

import * as ContentProvider from "../services/contentProvider";

export const structureContext = createContext();

export function StructureProvider({ children }) {
  const [structure, setStructure] = useState([]);

  useEffect(() => {
    const unsubscribe = ContentProvider.getStructure({
      next: (querySnapshot) => {
        let structure = querySnapshot.docs;
        Promise.all(structure.map((category) => category.data())).then(
          (appStructure) => {
            setStructure(appStructure);
          }
        );
      },
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <structureContext.Provider value={structure}>
      {children}
    </structureContext.Provider>
  );
}
