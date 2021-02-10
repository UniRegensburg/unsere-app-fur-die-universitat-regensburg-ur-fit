import * as Constants from "../../constants/constants";

import Contentlistscreen from "../pages/Contentlistscreen";
import Detailscreen from "../pages/Detailscreen";

import CategoryList from "../pages/CategoryList";

const categories = [
  Constants.pages.favorites,
  Constants.pages.relaxation,
  Constants.pages.fitness,
  Constants.pages.wellbeing,
  Constants.pages.nutrition,
];

export const Category = ({ match }) => {
  const category = categories.find((item) => {
    return match.params.category === item.value;
  });
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
  const category = categories.find((item) => {
    return match.params.category === item.value;
  });
  const subcategory = category.subcategories.find((item) => {
    return match.params.subitem === item.value;
  });
  return (
    <>
      <Contentlistscreen match={match} title={subcategory.title} />
    </>
  );
};

export const Content = ({ match }) => {
  if (match.url.split("/")[1] === "favorites") {
    const content = categories[0].content.find((item) => {
      return match.params.contentId === item.id;
    });
    return (
      <>
        <Detailscreen match={match} item={content} />
      </>
    );
  }
  const category = categories.find((item) => {
    return match.params.category === item.value;
  });
  const subcategory = category.subcategories.find((item) => {
    return match.params.subitem === item.value;
  });
  const content = subcategory.content.find((item) => {
    return match.params.contentId === item.id;
  });
  return (
    <>
      <Detailscreen match={match} item={content} />
    </>
  );
};
