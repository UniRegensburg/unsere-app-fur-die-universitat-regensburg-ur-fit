import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles, Typography } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ImprintText from "../../assets/textfiles/imprint.md";

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
  const [imprint, setImprint] = useState("");

  useEffect(() => {
    fetch(ImprintText)
      .then((res) => res.text())
      .then((text) => setImprint({ text }));
  });

  const classes = useStyles();
  return (
    <div className="Imprintscreen">
      <TopAppBar data-testid="appbar" title="Impressum" favIcon="visible" />
      <div className={classes.container}>
        <Typography variant="body1" className={classes.text} component="div">
          <ReactMarkdown source={imprint.text} />
        </Typography>
      </div>
    </div>
  );
}
