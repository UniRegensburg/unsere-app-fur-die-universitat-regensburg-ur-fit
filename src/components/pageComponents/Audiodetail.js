import React from "react";
import { makeStyles, Typography, Chip } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.main,
    textAlign: "start",
    marginBottom: "8px",
  },

  audio: {
    width: "100%",
    marginBottom: "8px",
  },

  chip: {
    marginRight: "8px",
    marginBottom: "16px",
    marginTop: "8px",
    float: "left",
    color: theme.palette.background.lightgrey,
    background: theme.palette.primary.light,
  },
}));

export default function AudioDetail(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        {data.title}
      </Typography>
      <audio controls className={classes.audio}>
        <source src={data.source} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {data.tags.map((tag, index) => {
        return (
          <Chip label={tag} size="small" key={index} className={classes.chip} />
        );
      })}
    </div>
  );
}
