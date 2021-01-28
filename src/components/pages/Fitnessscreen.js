import React from "react";
import TopAppBar from "../pageComponents/TopAppBar";
import CategoryList from "../pageComponents/CategoryList";
import * as Constants from "../../constants/constants";

const data = Constants.fitness_categories;

class Fitnessscreen extends React.Component {
  render() {
    return (
      <div className="Fitnessscreen">
        <TopAppBar data-testid="appbar" title="Fitness" />
        <CategoryList data={data} />
      </div>
    );
  }
}

export default Fitnessscreen;
