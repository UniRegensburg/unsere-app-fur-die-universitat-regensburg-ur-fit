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
import { addCategories, filterMensaData } from "../services/sortMensaData";
import moment from "moment";

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

export class Mensascreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaPlan: null,
      day: "Monday",
    };
  }

  componentDidMount() {
    let week = moment().week();
    getMensaData(week).then((data) => {
      this.setState({ mensaPlan: addCategories(data) });
    });
  }
  render() {
    const { classes } = this.props;
    if (this.state.mensaPlan === null) {
      return (
        <div className="Spinnerscreen">
          <TopAppBar title="URfit" />
          <CircularProgress data-testid="spinner" />
        </div>
      );
    } else {
      return (
        <div data-testid="mensa-appBar" className="Mensascreen">
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
              {filterMensaData(
                this.state.mensaPlan,
                this.state.day,
                Constants.meals.garnish
              ).map((meal, index) => (
                <MensaCardItem
                  className={classes.mensaCard}
                  title={meal.title}
                  price={meal.cost}
                  labels={meal.contentInfo}
                  contentInfo={meal.contentInfo}
                />
              ))}
              <Typography className={classes.categoryTitle}>
                Hauptgerichte
              </Typography>
              {filterMensaData(
                this.state.mensaPlan,
                this.state.day,
                Constants.meals.mainDish
              ).map((meal, index) => (
                <MensaCardItem
                  className={classes.mensaCard}
                  title={meal.title}
                  price={meal.cost}
                  labels={meal.contentInfo}
                  contentInfo={meal.contentInfo}
                />
              ))}
              <Typography className={classes.categoryTitle}>
                Desserts
              </Typography>
              {filterMensaData(
                this.state.mensaPlan,
                this.state.day,
                Constants.meals.dessert
              ).map((meal, index) => (
                <MensaCardItem
                  className={classes.mensaCard}
                  title={meal.title}
                  price={meal.cost}
                  labels={meal.contentInfo}
                  contentInfo={meal.contentInfo}
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
