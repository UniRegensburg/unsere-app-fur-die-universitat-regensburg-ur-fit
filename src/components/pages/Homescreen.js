import React from "react";
import { withStyles } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";

import * as TestContent from "../../constants/testContent.js";
import * as ConstantPages from "../../constants/constants.js";

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
        <TopAppBar title="URfit" />
        <div className={classes.container}>
          <h3 className={classes.text}>Meine Lieblingsübungen</h3>
          <ContentCard data={testdata.test1} />
          <ContentCard data={testdata.test2} />
          <ContentCard data={testdata.test3} />
          <ContentCard data={testdata.test4} />
        </div>

        <SimpleBottomNavigation
          class={classes.bottomNavigation}
          icon={classes.icon}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Homescreen);

class SimpleBottomNavigation extends React.Component {
  render() {
    let relaxation = ConstantPages.pages.relaxation,
      fitness = ConstantPages.pages.fitness,
      wellbeing = ConstantPages.pages.wellbeing,
      nutrition = ConstantPages.pages.nutrition;

    return (
      <BottomNavigation showLabels className={this.props.class}>
        <BottomNavigationAction
          className={this.props.icon}
          label={relaxation.title}
          icon={relaxation.icon}
          component={Link}
          to={relaxation.value}
        />
        <BottomNavigationAction
          className={this.props.icon}
          label={fitness.title}
          icon={fitness.icon}
          component={Link}
          to={fitness.value}
        />
        <BottomNavigationAction
          className={this.props.icon}
          label={wellbeing.title}
          icon={wellbeing.icon}
          component={Link}
          to={wellbeing.value}
        />
        <BottomNavigationAction
          className={this.props.icon}
          label={nutrition.title}
          icon={nutrition.icon}
          component={Link}
          to={nutrition.value}
        />
      </BottomNavigation>
    );
  }
}
