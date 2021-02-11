import React from "react";
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#2E303C",
    textAlign: "start",
  },

  audio: {
    width: "100%",
    marginBottom: "8px",
  },

  tag: {
    color: "#2E303C",
    marginRight: "8px",
    float: "left",
  },
}));

export default function AudioDetail(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div>
      <h3 className={classes.title}>{data.title}</h3>

      <audio controls className={classes.audio}>
        <source src={data.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {data.tags.map((tag, index) => {
        return (
          <span className={classes.tag} key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}
