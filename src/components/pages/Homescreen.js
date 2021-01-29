import React from "react";
import { withStyles } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";

import * as TestContent from "../../constants/testContent.js";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
  },

  bottomNavigation: {
    position: "sticky",
    bottom: "0",
    width: "99%",
  },

  icon: {
    color: "black",
  },
});

class Homescreen extends React.Component {
  render() {
    // testdata ist not tested for favorite=true (because it is dummy data)
    let testdata = TestContent.data;
    const { classes } = this.props;

    return (
      <div className="Homescreen">
        <TopAppBar data-testid="appbar" title="URfit" />
        <div className={classes.container}>
          <h3 data-testid="title" className={classes.text}>
            Meine Lieblingsübungen
          </h3>
          <ContentCard data-testid="content-item" data={testdata.test1} />
          <ContentCard data-testid="content-item" data={testdata.test2} />
          <ContentCard data-testid="content-item" data={testdata.test3} />
          <ContentCard data-testid="content-item" data={testdata.test4} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Homescreen);
