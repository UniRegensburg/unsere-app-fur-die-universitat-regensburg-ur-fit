import React from "react";

import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

class Homescreen extends React.Component {
  render() {
    return (
      <div className="Homescreen">
        <TopAppBar title="URfit" />
        <p>Homescreen content</p>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default Homescreen;
