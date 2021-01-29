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
import * as Categories from "../../constants/constants";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },
});

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    let data = this.getData(props);
    this.state = { categories: data.categories, title: data.title };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      let data = this.getData(this.props);
      this.setState({ categories: data.categories, title: data.title });
    }
  }

  getData(props) {
    // for now the title are hard coded ->
    // if our final data model is finished we should get the cases and title from that data model
    let categories, title;
    switch (props.location.pathname) {
      case "/relaxation":
        title = "Entspannung";
        categories = Categories.relaxation_categories;
        break;
      case "/fitness":
        title = "Fitness";
        categories = Categories.fitness_categories;
        break;
      case "/wellbeing":
        title = "Wohlbefinden";
        categories = Categories.wellbeing_categories;
        break;
      case "/nutrition":
        title = "Ernährung";
        categories = Categories.nutrition_categories;
        break;
      default:
        title = "Entspannung";
        categories = Categories.relaxation_categories;
    }
    return { categories, title };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Fitnessscreen">
        <TopAppBar data-testid="appbar" title={this.state.title} />
        <div className={classes.container}>
          <List>
            <ListItem button>
              <ListItemText>Alle Inhalte</ListItemText>
            </ListItem>
            {this.state.categories.map((item, index) => (
              <ExpandableListItem
                key={index}
                name={item.title}
                description={item.text}
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
  const { name, description } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setOpen(!open);
  };

  const handleCategoryClick = (event) => {
    console.log(event.target.innerHTML + " clicked");
    // todo: change to respective content list
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
