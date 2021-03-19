import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import Feedbackscreen from "../../components/pages/Feedbackscreen";
import { sendFeedback } from "../../components/services/sendFeedback";
jest.mock("../../components/services/sendFeedback");

test("check if screen content displays", () => {
  const { getByTestId } = render(
    <Router>
      <Feedbackscreen />
    </Router>
  );
  const appbar = getByTestId("appbar");
  const text = getByTestId("feedback-text");
  const textarea = getByTestId("feedback-textarea");
  const button = getByTestId("feedback-button");

  expect(appbar).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("check if textarea displays text", () => {
  const { getByTestId } = render(
    <Router>
      <Feedbackscreen />
    </Router>
  );
  const textarea = getByTestId("feedback-textarea");

  fireEvent.change(textarea, { target: { value: "feedback" } });

  expect(textarea.value).toBe("feedback");
});

test("check if textarea is cleared after sendFeedback returns success", async () => {
  const { getByTestId } = render(
      <Router>
        <Feedbackscreen />
      </Router>
    ),
    textarea = getByTestId("feedback-textarea");
  fireEvent.change(textarea, { target: { value: "fake user input" } });

  // fake positive response from sendFeedback service
  sendFeedback.mockImplementation(() => Promise.resolve(true));

  // click button and wait for mock function to be returned
  fireEvent.click(getByTestId("feedback-button"));
  await waitFor(() => expect(sendFeedback).toHaveReturned());

  expect(textarea.value).toBe("");
});

test("check if textarea is not cleared if sendFeedback returns error", async () => {
  const { getByTestId } = render(
      <Router>
        <Feedbackscreen />
      </Router>
    ),
    textarea = getByTestId("feedback-textarea");
  fireEvent.change(textarea, { target: { value: "fake user input" } });

  // fake negative response from sendFeedback service
  sendFeedback.mockImplementation(() =>
    Promise.reject("thrown for testing purposes")
  );

  // click button and wait for mock function to be returned
  fireEvent.click(getByTestId("feedback-button"));
  await waitFor(() => expect(sendFeedback).toHaveReturned());

  expect(textarea.value).toBe("fake user input");
});

test("check if snackbar is displayed if sendFeedback returns success", async () => {
  const { getByTestId, findByRole } = render(
      <Router>
        <Feedbackscreen />
      </Router>
    ),
    textarea = getByTestId("feedback-textarea");
  fireEvent.change(textarea, { target: { value: "fake user input" } });

  // fake positive response from sendFeedback sevice
  sendFeedback.mockImplementation(() => Promise.resolve(true));

  // click button and wait for mock function to be returned
  fireEvent.click(getByTestId("feedback-button"));

  // wait for snackbar to be displayed
  const snackbar = await findByRole("alert");
  expect(snackbar).toHaveAttribute(
    "class",
    expect.stringMatching(/[Ss]uccess/)
  );
});

test("check if snackbar is displayed when sendFeedback returns error", async () => {
  const { getByTestId, findByRole } = render(
      <Router>
        <Feedbackscreen />
      </Router>
    ),
    textarea = getByTestId("feedback-textarea");
  fireEvent.change(textarea, { target: { value: "fake user input" } });

  // fake negative response from sendFeedback sevice
  sendFeedback.mockImplementation(() =>
    Promise.reject("thrown for testing purposes")
  );

  fireEvent.click(getByTestId("feedback-button"));

  // wait for snackbar to be displayed
  const snackbar = await findByRole("alert");
  expect(snackbar).toHaveAttribute("class", expect.stringMatching(/[Ee]rror/));
});
