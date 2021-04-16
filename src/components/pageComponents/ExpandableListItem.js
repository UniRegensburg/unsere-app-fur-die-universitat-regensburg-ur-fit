import React from "react";
import {
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core/";
import { InfoOutlined } from "@material-ui/icons/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },

  topborder: {
    borderTop: "1.5px solid" + theme.palette.secondary.main,
    paddingLeft: "0",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.main,
  },

  infoIcon: {
    marginLeft: "auto",
    height: "18px",
    width: "18px",
    color: theme.palette.text.light,
  },

  text: {
    textAlign: "start",
    paddingStart: "16px",
    marginBottom: "8px",
    paddingEnd: "16px",
    color: theme.palette.text.light,
  },
}));

export default function ExpandableListItem(props) {
  const { name, description, link } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleInfoClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.container}>
      <ListItem className={classes.topborder}>
        <Link to={link} className={classes.link}>
          <ListItemText>{name}</ListItemText>
        </Link>
        <InfoOutlined className={classes.infoIcon} onClick={handleInfoClick} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText className={classes.text}>{description}</ListItemText>
      </Collapse>
    </div>
  );
}
