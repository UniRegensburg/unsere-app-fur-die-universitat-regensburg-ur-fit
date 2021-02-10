import React from "react";
import { withStyles } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";

import * as Constants from "../../constants/constants.js";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
    marginBottom: "60px",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
  },
});

class Homescreen extends React.Component {
  render() {
    // testdata ist not tested for favorite=true (because it is dummy data)
    let data = Constants.pages.favorites;
    const { classes } = this.props;

    return (
      <div className="Homescreen">
        <TopAppBar data-testid="appbar" title="URfit" />
        <div className={classes.container}>
          <h3 data-testid="title" className={classes.text}>
            Meine Lieblingsübungen
          </h3>
          {data.content.map((item, index) => (
            <ContentCard data-testid="content-item" data={item} />
          ))}
        </div>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default withStyles(styles)(Homescreen);
