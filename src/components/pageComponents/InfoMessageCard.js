import React from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core/";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },

  text: {
    color: theme.palette.text.main,
    textAlign: "start",
  },

  heart: {
    color: theme.palette.secondary.main,
    height: "0.7em",
  },

  share: {
    color: theme.palette.text.main,
    height: "0.7em",
  },
}));

export default function InfoMessageCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" className={classes.text}>
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
        </Typography>
      </CardContent>
    </Card>
  );
}
