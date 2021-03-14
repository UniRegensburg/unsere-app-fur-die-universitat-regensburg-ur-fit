import React from "react";
import { UserProvider } from "./useUser";
import { StructureProvider } from "./useStructure";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<UserProvider />, <StructureProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
