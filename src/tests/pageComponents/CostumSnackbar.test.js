import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CostumSnackbar from "../../components/pageComponents/CustomSnackbar";

test("check if snackbar is hidden if open is set false", () => {
  render(<CostumSnackbar open={false} message="snackbar msg" />);
  const snackbar = screen.queryByText("snackbar msg");

  expect(snackbar).not.toBeInTheDocument();
});

test("check if snackbar is visible if open is set true", () => {
  render(<CostumSnackbar open={true} message="snackbar msg" />);
  const snackbar = screen.getByText("snackbar msg");

  expect(snackbar).toBeInTheDocument();
});

test("check if close icon click is processed", () => {
  const onCloseCallback = jest.fn();
  render(<CostumSnackbar open={true} onClose={onCloseCallback} />);

  fireEvent.click(screen.getByLabelText("close"));
  expect(onCloseCallback).toBeCalledTimes(1);
});
