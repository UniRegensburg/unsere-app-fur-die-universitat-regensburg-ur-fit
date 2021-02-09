import React from "react";
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "100%",
  },

  title: {
    color: "#2E303C",
    textAlign: "start",
  },

  tag: {
    color: "#2E303C",
    marginRight: "8px",
    float: "left",
  },
}));

export default function VideoDetail(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div>
      <iframe
        title="testvideo"
        className={classes.video}
        src={data.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className={classes.title}>{data.title}</h3>
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
