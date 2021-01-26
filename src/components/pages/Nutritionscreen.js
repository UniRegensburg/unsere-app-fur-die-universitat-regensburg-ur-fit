import React from "react";

import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

class Nutritionscreen extends React.Component {
  render() {
    return (
      <div className="Nutrition">
        <TopAppBar title="URfit" />
        <p>Nutrition content</p>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default Nutritionscreen;
