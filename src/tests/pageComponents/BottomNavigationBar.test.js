import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import BottomNavigationBar from "../../components/pageComponents/BottomNavigationBar";
import { BrowserRouter as Router } from "react-router-dom";

it("check if bottom navigation bar displays", () => {
  const { getByTestId } = render(
    <Router>
      <BottomNavigationBar />
    </Router>
  );

  const navBar = getByTestId("bottomNavigationBar");
  const navItem1 = getByTestId("bottomNavigationBarItem0");
  const navItem2 = getByTestId("bottomNavigationBarItem1");
  const navItem3 = getByTestId("bottomNavigationBarItem2");
  const navItem4 = getByTestId("bottomNavigationBarItem3");

  expect(navBar).toBeInTheDocument();
  expect(navItem1).toBeInTheDocument();
  expect(navItem2).toBeInTheDocument();
  expect(navItem3).toBeInTheDocument();
  expect(navItem4).toBeInTheDocument();
});

it("check if bottom navigation bar item changes", () => {
  const { getByTestId } = render(
    <Router>
      <BottomNavigationBar />
    </Router>
  );

  const navItem1 = getByTestId("bottomNavigationBarItem0");
  const navItem2 = getByTestId("bottomNavigationBarItem1");

  fireEvent.click(navItem1);

  expect(navItem1).toHaveStyle("color: #3f51b5");

  fireEvent.click(navItem2);

  expect(navItem1).not.toHaveStyle("color: #3f51b5");
});
