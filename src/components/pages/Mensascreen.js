import React from "react";
import {
  CircularProgress,
  Grid,
  Button,
  withStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";

import TopAppBar from "../pageComponents/TopAppBar";
import getMensaData from "../services/retrieveMensaData";
import * as Constants from "../../constants/constants";
import MensaCardItem from "../pageComponents/MensaCardItem";
import { addCategories, filterMensaData } from "../services/sortMensaData";

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
      day: "Mo",
      error: false,
    };
  }

  componentDidMount() {
    let week = moment().week();
    getMensaData(week).then((data) => {
      if (typeof data !== "undefined" && data != null) {
        this.setState({ mensaPlan: addCategories(data) });
      } else {
        this.setState({ error: true });
      }
    });
  }
  render() {
    const { classes } = this.props;
    if (this.state.mensaPlan === null && this.state.error === false) {
      return (
        <div className="Spinnerscreen">
          <TopAppBar title="URfit" />
          <CircularProgress data-testid="spinner" />
        </div>
      );
    }
    if (this.state.mensaPlan === null && this.state.error === true) {
      return (
        <Dialog
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Das Laden der Mensadaten ist fehlgeschlagen"}
          </DialogTitle>
          <DialogActions>
            <Button
              component={Link}
              to={Constants.pages.home.value}
              color="primary"
              autoFocus
            >
              Zurück zum Hauptmenu
            </Button>
          </DialogActions>
        </Dialog>
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
                  key={index}
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
                  contentInfo={meal.additionalInfo}
                  key={index}
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
                  contentInfo={meal.additionalInfo}
                  key={index}
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
                  contentInfo={meal.additionalInfo}
                  key={index}
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
