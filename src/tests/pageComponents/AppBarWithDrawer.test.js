import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TopAppBar from "../../components/pageComponents/TopAppBar";
import AppBarDrawer from "../../components/pageComponents/AppBarDrawer";
import { BrowserRouter as Router } from "react-router-dom";


it("check if appbar displays", () => {
  const { getByTestId } = render(<TopAppBar />);
  const appbar = getByTestId("appbar");
  const drawerButton = getByTestId("burgermenu-button");
  const header = getByTestId("appbar-header");

  expect(appbar).toBeInTheDocument();
  expect(drawerButton).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});

it("check if drawer displays when button is clicked", () => {
  const { getByTestId } = render(
    <Router>
     <TopAppBar />
    </Router>);
  const appbar = getByTestId("appbar");
  const drawerButton = getByTestId("burgermenu-button");
  const header = getByTestId("appbar-header");

  fireEvent.click(drawerButton);

  const drawer = getByTestId("appbar-drawer");

  expect(drawer).toBeInTheDocument();
  expect(appbar).toBeInTheDocument();
  expect(drawerButton).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});

it("check if drawer displays", () => {
  const { getByTestId, getAllByTestId } = render(
      <Router>
        <AppBarDrawer open={true} />
      </Router>
  );
  const drawer = getByTestId("appbar-drawer");
  const logo = getByTestId("drawer-logo");
  const divider = getByTestId("drawer-divider");
  const items = getAllByTestId("drawer-listitem");

  expect(drawer).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(divider).toBeInTheDocument();
  expect(items).toHaveLength(10);
});
