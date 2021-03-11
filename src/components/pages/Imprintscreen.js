import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.text.main,
    textAlign: "start",
  },
  container: {
    marginStart: "16px",
    marginEnd: "16px",
    marginTop: "16px",
  },
}));

export default function Imprintscreen(props) {
  const classes = useStyles();
  return (
    <div className="Imprintscreen">
      <TopAppBar data-testid="appbar" title="Impressum" />
      <div className={classes.container}>
        <Typography variant="body1" className={classes.text}>
          Diese App befindet sich zur Zeit in der Entwicklung und ist noch in
          Arbeit.
          <br />
          <br />
          Verantwortlich für den Inhalt dieser Seite:
          <br />
          Alexander Bazo
          <br />
          Lehrstuhl für Medieninformatik
          <br />
          Universitätsstraße 31
          <br />
          93053 Regensburg
          <br />
          Telefon: <a href="tel:0941 943 4958">0941 943 4958</a>
          <br />
          E-Mail:&nbsp;
          <a href="mailto:alexanderbazo@googlemail.com">
            alexanderbazo@googlemail.com
          </a>
        </Typography>
      </div>
    </div>
  );
}
