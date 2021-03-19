import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

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

  tag: {
    color: theme.palette.text.main,
    marginRight: "8px",
    float: "left",
  },
}));

export default function AudioDetail(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div>
      <Typography variant="body1" className={classes.title}>
        {data.title}
      </Typography>

      <audio controls className={classes.audio}>
        <source src={data.source} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {data.tags.map((tag, index) => {
        return (
          <Typography variant="caption" className={classes.tag} key={index}>
            {tag}
          </Typography>
        );
      })}
    </div>
  );
}
