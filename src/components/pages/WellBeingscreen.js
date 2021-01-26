import React from "react";

import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

class WellBeingscreen extends React.Component {
  render() {
    return (
      <div className="WellBeing">
        <TopAppBar title="URfit" />
        <p>WellBeing content</p>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default WellBeingscreen;
