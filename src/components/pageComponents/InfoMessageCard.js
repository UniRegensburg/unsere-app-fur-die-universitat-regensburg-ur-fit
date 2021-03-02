import React from "react";
import { makeStyles, Card, CardContent } from "@material-ui/core/";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "solid 2px #00817B",
  },

  cardContent: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
    margin: "0",
    // fontSize: "large",
  },

  heart: {
    color: "#A7525E",
    height: "0.7em",
  },

  share: {
    color: "#2E303C",
    height: "0.7em",
  },
}));

export default function InfoMessageCard() {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent className={classes.cardContent}>
        <p className={classes.text}>
          Hier ist es noch ganz schön leer...
          <br />
          In den Bereichen Entspannung, Fitness, Wohlbefinden und Ernährung
          findest du verschiedene Sport-, Bewegungs- und Informationsangebote in
          Form von Video-, Audio- und Textinhalten.
          <br />
          Viel Spaß beim Stöbern!
          <br />
          <br />
          <FavoriteIcon className={classes.heart} /> Favorisiere bestimmte
          Inhalte und finde sie dann hier auf deiner Seite wieder!
          <br />
          <br />
          <ShareIcon className={classes.share} /> Teile Inhalte mit Freunden!
        </p>
      </CardContent>
    </Card>
  );
}
