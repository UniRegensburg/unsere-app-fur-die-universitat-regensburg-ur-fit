import React from "react";
import TopAppBar from "../pageComponents/TopAppBar";
import CategoryList from "../pageComponents/CategoryList";
import * as Constants from "../../constants/constants";

const data = Constants.nutrition_categories;

class Nutritionscreen extends React.Component {
  render() {
    return (
      <div className="Nutritionscreen">
        <TopAppBar data-testid="appbar" title="Ernährung" />
        <CategoryList data={data} />
      </div>
    );
  }
}

export default Nutritionscreen;
