import React from "react";
import {
  CircularProgress,
  Grid,
  Button,
  withStyles,
  Typography,
} from "@material-ui/core";

import TopAppBar from "../pageComponents/TopAppBar";
import getMensaData from "../services/retrieveMensaData";
import * as Constants from "../../constants/constants";
import MensaCardItem from "../pageComponents/MensaCardItem";
import addCategories from "../models/MensaData";

const styles = (theme) => ({
  weekRow: {
    marginTop: "20px",
  },

  categoryTitle: {
    textAlign: "left",
    fontWeight: "bold",
    margin: "30px 0px 10px 15px",
  },
  notSelectedButton: {
    color: "grey",
    fontSize: "20px",
  },
  selectedButton: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#00817B",
  },
});

class Mensascreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaPlan: null,
      day: "mo",
    };
  }

  componentDidMount() {
    let mensaData = [];
    for (let day in Constants.week) {
      getMensaData(Constants.week[day]).then((data) => {
        mensaData.push({ day: Constants.week[day], data: data });

        if (mensaData.length === Constants.week.length) {
          this.setState({ mensaPlan: addCategories(mensaData) });
        }
      });
    }
  }
  render() {
    const { classes } = this.props;
    if (this.state.mensaPlan === null) {
      return (
        <div className="Mensascreen">
          <TopAppBar title="URfit" />
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <div className="Mensascreen">
          <TopAppBar title="URfit" />
          <Grid container direction="column">
            <Grid
              container
              className={classes.weekRow}
              direction="row"
              justify="space-around"
              alignItems="flex-start"
            >
              {Constants.week.map((page, index) => (
                <Button
                  value={page}
                  className={
                    this.state.day === page
                      ? classes.selectedButton
                      : classes.notSelectedButton
                  }
                  onClick={() => {
                    this.setState({ day: page });
                  }}
                >
                  {page}
                </Button>
              ))}
            </Grid>
            <Grid>
              <Typography className={classes.categoryTitle}>
                Beilagen
              </Typography>
              {this.state.mensaPlan
                .find((item) => {
                  return item.day === this.state.day;
                })
                .data.filter((item) => {
                  if (item.category.charAt(0) === Constants.meals.garnish) {
                    return item;
                  }
                  return null;
                })
                .map((meal, index) => (
                  <MensaCardItem
                    className={classes.mensaCard}
                    title={meal.title}
                    price={meal.studCost}
                    labels={meal.labels}
                  />
                ))}
              <Typography className={classes.categoryTitle}>
                Hauptgerichte
              </Typography>
              {this.state.mensaPlan
                .find((item) => {
                  return item.day === this.state.day;
                })
                .data.filter((item) => {
                  if (item.category.charAt(0) === Constants.meals.mainDish) {
                    return item;
                  }
                  return null;
                })
                .map((meal, index) => (
                  <MensaCardItem
                    className={classes.mensaCard}
                    title={meal.title}
                    price={meal.studCost}
                    labels={meal.labels}
                  />
                ))}
              <Typography className={classes.categoryTitle}>
                Desserts
              </Typography>
              {this.state.mensaPlan
                .find((item) => {
                  return item.day === this.state.day;
                })
                .data.filter((item) => {
                  if (item.category.charAt(0) === Constants.meals.dessert) {
                    return item;
                  }
                  return null;
                })
                .map((meal, index) => (
                  <MensaCardItem
                    className={classes.mensaCard}
                    title={meal.title}
                    price={meal.studCost}
                    labels={meal.labels}
                  />
                ))}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Mensascreen);
