import React from "react";
import { AuthStateProvider } from "./useAuthState";
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
    <ProviderComposer contexts={[<AuthStateProvider />, <StructureProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
