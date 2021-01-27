import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
  const navigation = getByTestId("bottomnavigation");
  const relaxationButton = getByTestId("navigation-relaxation");
  const fitnessButton = getByTestId("navigation-fitness");
  const wellbeingButton = getByTestId("navigation-wellbeing");
  const nutritionButton = getByTestId("navigation-nutrition");

  expect(appbar).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(navigation).toBeInTheDocument();
  expect(relaxationButton).toBeInTheDocument();
  expect(fitnessButton).toBeInTheDocument();
  expect(wellbeingButton).toBeInTheDocument();
  expect(nutritionButton).toBeInTheDocument();
});

it("check if url changes on relaxation click", () => {
  global.window = { location: { pathname: null } };
  const { getByTestId } = render(
    <Router>
      <Homescreen />
    </Router>
  );
  const relaxationButton = getByTestId("navigation-relaxation");

  fireEvent.click(relaxationButton);

  expect(global.window.location.pathname).toEqual("/relaxation");
});

it("check if url changes on fitness click", () => {
  global.window = { location: { pathname: null } };
  const { getByTestId } = render(
    <Router>
      <Homescreen />
    </Router>
  );
  const fitnessButton = getByTestId("navigation-fitness");

  fireEvent.click(fitnessButton);

  expect(global.window.location.pathname).toEqual("/fitness");
});

it("check if url changes on wellbeing click", () => {
  global.window = { location: { pathname: null } };
  const { getByTestId } = render(
    <Router>
      <Homescreen />
    </Router>
  );
  const wellbeingButton = getByTestId("navigation-wellbeing");

  fireEvent.click(wellbeingButton);

  expect(global.window.location.pathname).toEqual("/wellbeing");
});

it("check if url changes on nutrition click", () => {
  global.window = { location: { pathname: null } };
  const { getByTestId } = render(
    <Router>
      <Homescreen />
    </Router>
  );
  const nutritionButton = getByTestId("navigation-nutrition");

  fireEvent.click(nutritionButton);

  expect(global.window.location.pathname).toEqual("/nutrition");
});
