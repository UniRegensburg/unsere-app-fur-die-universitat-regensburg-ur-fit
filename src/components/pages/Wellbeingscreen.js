import React from "react";
import TopAppBar from "../pageComponents/TopAppBar";
import CategoryList from "../pageComponents/CategoryList";
import * as Constants from "../../constants/constants";

const data = Constants.wellbeing_categories;

class Wellbeingscreen extends React.Component {
  render() {
    return (
      <div className="Wellbeingscreen">
        <TopAppBar data-testid="appbar" title="Wohlbefinden" />
        <CategoryList data={data} />
      </div>
    );
  }
}

export default Wellbeingscreen;
