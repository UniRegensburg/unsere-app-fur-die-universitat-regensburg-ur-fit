import React from "react";
import { withStyles } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import InfoMessageCard from "../pageComponents/InfoMessageCard";

import * as Constants from "../../constants/constants.js";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

const username = "Viktor"; // get from db

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

  card: {
    border: "solid 2px #00817B",
    marginBottom: "16px",
  },

  cardContent: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
});

class Homescreen extends React.Component {
  render() {
    // testdata is not tested for favorite=true (because it is dummy data)
    let data = Constants.pages.favorites;
    const { classes } = this.props;

    let content;
    if (Object.getOwnPropertyNames(data).length !== 0) {
      // if we have unique keys use: Object.keys(data).length
      // show favorites
      content = (
        <div>
          <h3 data-testid="title" className={classes.text}>
            Deine Lieblingsübungen
          </h3>
          {data.content.map((item) => (
            <ContentCard data-testid="content-item" data={item} />
          ))}
        </div>
      );
    } else {
      // no favorites, show info
      content = <InfoMessageCard />;
    }

    return (
      <div className="Homescreen">
        <TopAppBar data-testid="appbar" title="URfit" />
        <div className={classes.container}>
          <h4 className={classes.text}>
            Hallo {username}! Willkommen bei URfit.
          </h4>
          {content}
        </div>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default withStyles(styles)(Homescreen);
