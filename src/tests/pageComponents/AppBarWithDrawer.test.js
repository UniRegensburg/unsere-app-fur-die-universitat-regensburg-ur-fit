import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TopAppBar from "../../components/pageComponents/TopAppBar";
import AppBarDrawer from "../../components/pageComponents/AppBarDrawer";

it("check if appbar dispays", () => {
  const { getByTestId } = render(<TopAppBar />);
  const appbar = getByTestId("appbar");
  const drawerButton = getByTestId("burgermenu-button");
  const logo = getByTestId("appbar-logo");

  expect(appbar).toBeInTheDocument();
  expect(drawerButton).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});

it("should display the drawer when button is clicked", () => {
  const { getByTestId } = render(<TopAppBar />);
  const appbar = getByTestId("appbar");
  const drawerButton = getByTestId("burgermenu-button");
  const logo = getByTestId("appbar-logo");

  fireEvent.click(drawerButton);

  const drawer = getByTestId("appbar-drawer");

  expect(drawer).toBeInTheDocument();
  expect(appbar).toBeInTheDocument();
  expect(drawerButton).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});

it("check if drawer displays", () => {
  const { getByTestId, getAllByTestId } = render(<AppBarDrawer open={true} />);
  const drawer = getByTestId("appbar-drawer");
  const logo = getByTestId("drawer-logo");
  const divider = getByTestId("drawer-divider");
  const items = getAllByTestId("drawer-listitem");

  expect(drawer).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(divider).toBeInTheDocument();
  expect(items).toHaveLength(10);
});
