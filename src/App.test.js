import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("example test", () => {
  render(<App />);
  const linkElement = screen.getByText("Meine Lieblingsübungen");
  expect(linkElement).toBeInTheDocument();
});
