import React from "react";

import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

class Fitnessscreen extends React.Component {
  render() {
    return (
      <div className="Fitnessscreen">
        <TopAppBar title="URfit" />
        <p>Fitness content</p>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default Fitnessscreen;
