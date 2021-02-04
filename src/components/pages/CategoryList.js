import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  withStyles,
  makeStyles,
} from "@material-ui/core/";
import { ExpandLess, ExpandMore } from "@material-ui/icons/";
import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },
});

class CategoryList extends React.Component {
  render() {
    const { classes, title, categories } = this.props;
    return (
      <div>
        <TopAppBar data-testid="appbar" title={title} />
        <div className={classes.container}>
          <List>
            <ListItem button>
              <ListItemText>Alle Inhalte</ListItemText>
            </ListItem>
            {categories.map((item, index) => (
              <ExpandableListItem
                key={index}
                name={item.title}
                description={item.text}
                link={item.value}
              />
            ))}
          </List>
        </div>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default withStyles(styles)(CategoryList);

const useStyles = makeStyles((theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },

  topborder: {
    borderTop: "1.5px solid #A7525E",
    paddingLeft: "0",
  },

  text: {
    textAlign: "start",
    paddingStart: "16px",
    marginBottom: "8px",
    paddingEnd: "16px",
    color: "#2E303CAA",
  },
}));

function ExpandableListItem(props) {
  const { name, description, link } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setOpen(!open);
  };

  const handleCategoryClick = (event) => {
    console.log(event.target.innerHTML + " clicked");
    window.location.assign(link);
  };

  return (
    <div className={classes.container}>
      <ListItem className={classes.topborder}>
        <ListItemText onClick={handleCategoryClick}>{name}</ListItemText>
        {open ? (
          <ExpandLess onClick={handleExpandClick} />
        ) : (
          <ExpandMore onClick={handleExpandClick} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText className={classes.text}>{description}</ListItemText>
      </Collapse>
    </div>
  );
}
