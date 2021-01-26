import React from "react";

import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

class Relaxationscreen extends React.Component {
  render() {
    return (
      <div className="Relaxation">
        <TopAppBar title="URfit" />
        <p>Relaxation content</p>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default Relaxationscreen;
