import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Homescreen from "../../components/pages/Homescreen.js";
import { BrowserRouter as Router } from "react-router-dom";

it("check if content is displayed", () => {
  const { getByTestId } = render(
    <Router>
      <Homescreen />
    </Router>
  );
  const appbar = getByTestId("appbar");
  const title = getByTestId("title");

  expect(appbar).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
