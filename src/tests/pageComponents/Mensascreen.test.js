import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Mensascreen from "../../components/pages/Mensascreen";
import MensaCardItem from "../../components/pageComponents/MensaCardItem";

it("check if mensaCardItem content displays", () => {
  const { getByTestId } = render(
    <MensaCardItem
      title="test"
      price="test"
      labels={["test", "test2"]}
      contentInfo={["testInfo"]}
    />
  );
  const cardItem = getByTestId("card-item");
  const cardTitle = getByTestId("card-title");
  const cardLabel = getByTestId("card-label");
  const cardButton = getByTestId("card-button");

  fireEvent.click(cardButton);

  const ingredientsSubtitle = getByTestId("ingredients-subtitle");
  const priceSubtitle = getByTestId("price-subtitle");

  expect(cardItem).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(ingredientsSubtitle).toBeInTheDocument();
  expect(priceSubtitle).toBeInTheDocument();
  expect(cardLabel).toBeInTheDocument();
});

it("check if mensascreen displays", () => {
  let { getByTestId } = render(<Mensascreen />);

  const spinner = getByTestId("spinner");
  expect(spinner).toBeInTheDocument();

  setTimeout(() => {
    const appBar = getByTestId("mensa-appBar");
    expect(appBar).toBeInTheDocument();
  }, 30000);
});
