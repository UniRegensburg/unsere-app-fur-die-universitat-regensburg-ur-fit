import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "100%",
  },

  title: {
    color: "#2E303C",
    textAlign: "start",
    marginTop: "8px",
    marginBottom: "8px",
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
      <Typography variant="body1" className={classes.title}>
        {data.title}
      </Typography>
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
