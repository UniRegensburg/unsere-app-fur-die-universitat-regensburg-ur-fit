import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "100%",
  },

  title: {
    color: theme.palette.text.main,
    textAlign: "start",
    marginTop: "8px",
    marginBottom: "8px",
  },

  tag: {
    color: theme.palette.text.main,
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
        src={data.source}
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
