import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Mensascreen from "../../components/pages/Mensascreen";
import MensaCardItem from "../../components/pageComponents/MensaCardItem";

it("check if mensaCardItem content displays", () => {
  const { getByTestId } = render(
    <MensaCardItem title="test" price="test" labels={["test", "test2"]} />
  );
  const cardItem = getByTestId("card-item");
  const cardTitle = getByTestId("card-title");
  const cardSubtitle = getByTestId("card-subtitle");
  const cardLabel = getByTestId("card-label");

  expect(cardItem).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(cardSubtitle).toBeInTheDocument();
  expect(cardLabel).toBeInTheDocument();
});

it("check if mensascreen displays", (done) => {
  let { getByTestId } = render(<Mensascreen />);

  const spinner = getByTestId("spinner");

  expect(spinner).toBeInTheDocument();
});
