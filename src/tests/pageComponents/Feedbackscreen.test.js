import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Feedbackscreen from "../../components/pages/Feedbackscreen";

it("check if screen content displays", () => {
    const { getByTestId } = render(<Feedbackscreen />);
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
  const { getByTestId } = render(<Feedbackscreen />);
  const textarea = getByTestId("feedback-textarea");

  fireEvent.change(textarea, { target: { value: "feedback" } });

  expect(textarea.value).toBe("feedback");
});
