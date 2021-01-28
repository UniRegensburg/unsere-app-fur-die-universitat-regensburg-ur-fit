import React from "react";
import TopAppBar from "../pageComponents/TopAppBar";
import CategoryList from "../pageComponents/CategoryList";
import * as Constants from "../../constants/constants";

const data = Constants.relaxation_categories;

class Relaxationscreen extends React.Component {
  render() {
    return (
      <div className="Relaxationscreen">
        <TopAppBar data-testid="appbar" title="Entspannung" />
        <CategoryList data={data} />
      </div>
    );
  }
}

export default Relaxationscreen;
