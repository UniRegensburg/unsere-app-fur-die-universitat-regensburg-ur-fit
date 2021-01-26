import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core/";

import * as Constants from "../../constants/constants.js";

const useStyles = makeStyles((theme) => ({
  cardItem: {
    margin: "10px",
    boxShadow: "none",
    borderStyle: "solid",
    borderWidth: "1px",
  },
  cardTitle: {
    fontSize: "20px",
    textAlign: "left",
  },
  cardSubtitle: {
    textAlign: "left",
    bottom: "0",
  },
  label: {
    fontSize: "15px",
    textAlign: "right",
  },
}));

export default function MensaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.cardItem}>
      <Grid container direction="row">
        <Grid item xs={8}>
          <CardContent>
            <Typography className={classes.cardTitle}>{props.title}</Typography>
          </CardContent>
          <CardContent>
            <Typography className={classes.cardSubtitle}>
              Preis: {props.price}€
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardContent>
            <Typography className={classes.label}>{props.labels[0]}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
