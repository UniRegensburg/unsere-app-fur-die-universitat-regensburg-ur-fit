import { useContext } from "react";

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
      <CategoryList category={category} match={match} />
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
