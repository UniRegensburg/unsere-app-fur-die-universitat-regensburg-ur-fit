import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import Feedbackscreen from "../../components/pages/Feedbackscreen";

it("check if screen content displays", () => {
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

it("check if textarea displays text", () => {
  const { getByTestId } = render(
    <Router>
      <Feedbackscreen />
    </Router>
  );
  const textarea = getByTestId("feedback-textarea");

  fireEvent.change(textarea, { target: { value: "feedback" } });

  expect(textarea.value).toBe("feedback");
});
