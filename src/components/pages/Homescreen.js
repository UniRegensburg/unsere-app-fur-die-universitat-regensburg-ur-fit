import React from "react";

import TopAppBar from "../pageComponents/TopAppBar";

class Homescreen extends React.Component {
  render() {
    return (
      <div className="Homescreen">
        <TopAppBar title={"URfit"}/>
        <p>Homescreen content</p>
      </div>
    );
  }
}

export default Homescreen;
