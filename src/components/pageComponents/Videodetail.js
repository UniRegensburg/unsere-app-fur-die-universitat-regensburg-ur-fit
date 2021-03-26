import React from "react";
import { makeStyles, Typography, Chip } from "@material-ui/core/";

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

  chip: {
    marginRight: "8px",
    marginBottom: "16px",
    marginTop: "8px",
    float: "left",
    color: theme.palette.background.lightgrey,
    background: theme.palette.primary.light,
  },
}));

export default function VideoDetail(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        {data.title}
      </Typography>
      <iframe
        title="testvideo"
        className={classes.video}
        src={data.source}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {data.tags.map((tag, index) => {
        return (
          <Chip label={tag} size="small" key={index} className={classes.chip} />
        );
      })}
    </div>
  );
}
