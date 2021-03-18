import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles, Typography } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ConditionsText from "../../assets/textfiles/conditions-of-use.md";

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

export default function ConditionsOfUseScreen(props) {
  const [conditions, setConditions] = useState("");

  useEffect(() => {
    fetch(ConditionsText)
      .then((res) => res.text())
      .then((text) => setConditions({ text }));
  });

  const classes = useStyles();
  return (
    <div className="ConditionsOfUseScreen">
      <TopAppBar data-testid="appbar" title="Nutzungsbedingungen" />
      <div className={classes.container}>
        <Typography variant="body1" className={classes.text} component="div">
          <ReactMarkdown source={conditions.text} />
        </Typography>
      </div>
    </div>
  );
}
