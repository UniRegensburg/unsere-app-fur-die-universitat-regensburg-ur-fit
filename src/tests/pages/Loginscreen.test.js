import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loginscreen from "../../components/pages/Loginscreen";

it("check if screen content displays", () => {
    const { getByTestId } = render(<Loginscreen />);
    const logo = getByTestId("logo");
    const inputEMail = getByTestId("inputEMail");
    const inputPassword = getByTestId("inputPassword");
    const formLabel = getByTestId("formLabel");
    const formCheckbox = getByTestId("formCheckbox");
    const buttonLogin = getByTestId("buttonLogin");
    
    expect(logo).toBeInTheDocument();
    expect(inputEMail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(formLabel).toBeInTheDocument();
    expect(formCheckbox).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
  });

