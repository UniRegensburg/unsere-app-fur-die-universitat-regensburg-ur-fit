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
      {Constants.pages.slice(1, 5).map((page, index) => (
        <BottomNavigationAction
          label={page.title}
          className={classes.bottomNavBarItem}
          icon={page.icon}
          component={Link}
          value={page.value}
          to={page.value}
          key={index}
          data-testid={"bottomNavigationBarItem" + index}
        />
      ))}
    </BottomNavigation>
  );
}
