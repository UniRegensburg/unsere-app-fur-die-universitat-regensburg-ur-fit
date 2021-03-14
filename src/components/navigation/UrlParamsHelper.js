import { useContext } from "react";

import * as Constants from "../../constants/constants";

import Contentlistscreen from "../pages/Contentlistscreen";
import Detailscreen from "../pages/Detailscreen";
import Mensascreen from "../pages/Mensascreen";
import CategoryList from "../pages/CategoryList";
import { structureContext } from "../hooks/useStructure";

export const Category = ({ match }) => {
  const structure = useContext(structureContext);
  const category = structure.find(
    (element) => element.value === match.params.category
  );
  return (
    <>
      <CategoryList
        title={category.title}
        categories={category.subcategories}
        match={match}
      />
    </>
  );
};

export const Subcategory = ({ match }) => {
  if (match.params.subcategory === "mensa") {
    return (
      <>
        <Mensascreen />
      </>
    );
  }
  return (
    <>
      <Contentlistscreen match={match} />
    </>
  );
};

export const Content = ({ match }) => {
  return (
    <>
      <Detailscreen match={match} />
    </>
  );
};
