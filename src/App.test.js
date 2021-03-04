import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("example test", () => {
  const { getByTestId } = render(<App />);
  const title = getByTestId("title");
  expect(title).toBeInTheDocument();
});
