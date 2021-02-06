import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import { Link } from "react-router-dom";

import * as Constants from "../../constants/constants.js";

const useStyles = makeStyles({
  bottomNavBar: {
    position: "fixed",
    width: "100%",
    bottom: "0",
  },

  bottomNavBarItem: {
    padding: "0",
  },
});

export default function BottomNavigationBar() {
  const classes = useStyles();

  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const onPageChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={onPageChange}
      showLabels
      className={classes.bottomNavBar}
      data-testid="bottomNavigationBar"
    >
      <BottomNavigationAction
        label={Constants.pages.relaxation.title}
        className={classes.bottomNavBarItem}
        icon={Constants.pages.relaxation.icon}
        component={Link}
        value={Constants.pages.relaxation.value}
        to={Constants.pages.relaxation.value}
        data-testid={"navigation-relaxation"}
      />
      <BottomNavigationAction
        label={Constants.pages.fitness.title}
        className={classes.bottomNavBarItem}
        icon={Constants.pages.fitness.icon}
        component={Link}
        value={Constants.pages.fitness.value}
        to={Constants.pages.fitness.value}
        data-testid={"navigation-fitness"}
      />

      <BottomNavigationAction
        label={Constants.pages.wellbeing.title}
        className={classes.bottomNavBarItem}
        icon={Constants.pages.wellbeing.icon}
        component={Link}
        value={Constants.pages.wellbeing.value}
        to={Constants.pages.wellbeing.value}
        data-testid={"navigation-wellbeing"}
      />
      <BottomNavigationAction
        label={Constants.pages.nutrition.title}
        className={classes.bottomNavBarItem}
        icon={Constants.pages.nutrition.icon}
        component={Link}
        value={Constants.pages.nutrition.value}
        to={Constants.pages.nutrition.value}
        data-testid={"navigation-nutrition"}
      />
    </BottomNavigation>
  );
}
