import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core/";
import { ExpandLess, ExpandMore } from "@material-ui/icons/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },

  topborder: {
    borderTop: "1.5px solid #A7525E",
    paddingLeft: "0",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },

  expandIcon: {
    marginLeft: "auto",
  },

  text: {
    textAlign: "start",
    paddingStart: "16px",
    marginBottom: "8px",
    paddingEnd: "16px",
    color: "#2E303CAA",
  },
}));

export default function ExpandableListItem(props) {
  const { name, description, link, history } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.container}>
      <ListItem className={classes.topborder}>
        <Link to={link} className={classes.link}>
          <ListItemText>{name}</ListItemText>
        </Link>
        {open ? (
          <ExpandLess
            className={classes.expandIcon}
            onClick={handleExpandClick}
          />
        ) : (
          <ExpandMore
            className={classes.expandIcon}
            onClick={handleExpandClick}
          />
        )}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText className={classes.text}>{description}</ListItemText>
      </Collapse>
    </div>
  );
}
