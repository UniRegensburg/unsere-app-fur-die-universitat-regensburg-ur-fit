import * as Constants from "../../constants/constants";

import Contentlistscreen from "../pages/Contentlistscreen";
import Detailscreen from "../pages/Detailscreen";
import Mensascreen from "../pages/Mensascreen";
import CategoryList from "../pages/CategoryList";

export const Category = ({ match }) => {
  const category = Constants.pages[match.params.category];
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
  const subcategory = Constants.pages[match.params.category].subcategories.find(
    (item) => {
      return match.params.subcategory === item.value;
    }
  );
  return (
    <>
      <Contentlistscreen match={match} title={subcategory.title} />
    </>
  );
};

export const Content = ({ match }) => {
  if (match.url.split("/")[1] === "content") {
    const content = Constants.pages.favorites.content.find((item) => {
      return match.params.contentId === item.id;
    });
    return (
      <>
        <Detailscreen match={match} item={content} />
      </>
    );
  }
  const subcategory = Constants.pages[match.params.category].subcategories.find(
    (item) => {
      return match.params.subcategory === item.value;
    }
  );
  const content = subcategory.content.find((item) => {
    return match.params.contentId === item.id;
  });

  return (
    <>
      <Detailscreen match={match} item={content} />
    </>
  );
};
