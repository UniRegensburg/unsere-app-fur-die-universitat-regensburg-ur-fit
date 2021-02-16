import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

test("check if textarea is cleared and snackbar displayed after sendFeedback returns success", (done) => {
  const { getByTestId } = render(
    <Router>
      <Feedbackscreen />
    </Router>
  );

  const textarea = getByTestId("feedback-textarea");
  const button = getByTestId("feedback-button");

  fireEvent.change(textarea, { target: { value: "feedback" } });
  expect(textarea.value).toBe("feedback");

  sendFeedback.mockImplementationOnce(() => Promise.resolve({ success: true }));

  fireEvent.click(button);

  setTimeout(() => {
    expect(textarea.value).toBe("");

    const snackbar = getByTestId("feedback-snackbar");
    expect(snackbar).toBeInTheDocument();
    done();
  }, 300);
});

test("check if textarea is not cleared and snackbar displayed when sendFeedback returns error", (done) => {
  const { getByTestId } = render(
    <Router>
      <Feedbackscreen />
    </Router>
  );

  const textarea = getByTestId("feedback-textarea");
  const button = getByTestId("feedback-button");

  fireEvent.change(textarea, { target: { value: "feedback" } });
  expect(textarea.value).toBe("feedback");

  sendFeedback.mockImplementationOnce(() => Promise.reject("error"));
  fireEvent.click(button);

  setTimeout(() => {
    expect(textarea.value).toBe("feedback");

    const snackbar = getByTestId("feedback-snackbar");
    expect(snackbar).toBeInTheDocument();
    done();
  }, 300);
});
