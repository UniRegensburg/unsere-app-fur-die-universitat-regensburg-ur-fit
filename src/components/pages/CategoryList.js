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
import ExpandableListItem from "../pageComponents/ExpandableListItem";
import { ProtectedRoute } from "../navigation/ProtectedRoute";
import Contentlistscreen from "./Contentlistscreen";
import { Switch } from "react-router-dom";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },
});

class CategoryList extends React.Component {
  render() {
    const { classes, title, categories, history, match } = this.props;
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
                link={`/category/${match.params.category}/${item.value}`}
                history={history}
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
