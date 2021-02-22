import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomSnackbar from "../../components/pageComponents/CustomSnackbar";

test("check if snackbar is hidden if open is set false", () => {
  render(<CustomSnackbar open={false} />);
  const snackbar = screen.queryByRole("alert");

  expect(snackbar).not.toBeInTheDocument();
});

test("check if snackbar is visible if open is set true", () => {
  render(<CustomSnackbar open={true} message="snackbar msg" />);
  const snackbar = screen.getByText("snackbar msg");

  expect(snackbar).toBeInTheDocument();
});

test("check if close icon click is processed", () => {
  const onCloseCallback = jest.fn();
  render(<CustomSnackbar open={true} onClose={onCloseCallback} />);

  fireEvent.click(screen.getByLabelText("close"));
  expect(onCloseCallback).toBeCalledTimes(1);
});

test("check that default type is info", () => {
  render(<CustomSnackbar open={true} />);
  const snackbar = screen.getByRole("alert");

  expect(snackbar).toHaveAttribute("class", expect.stringMatching(/[Ii]nfo/));
});

test("check that type changes class properties", () => {
  render(<CustomSnackbar open={true} type="warning" />);
  const snackbar = screen.getByRole("alert");

  expect(snackbar).toHaveAttribute(
    "class",
    expect.stringMatching(/[Ww]arning/)
  );
});
