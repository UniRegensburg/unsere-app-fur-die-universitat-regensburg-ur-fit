import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.main,
    textAlign: "start",
  },

  tag: {
    color: theme.palette.text.main,
    marginRight: "8px",
    marginBottom: "8px",
    float: "left",
  },

  text: {
    color: theme.palette.text.main,
    marginTop: "8px",
    float: "left",
    textAlign: "left",
  },
}));

export default function TextDetail(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className="ContentDetailText">
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
      <br></br>
      <Typography variant="body2" className={classes.text}>
        {data.content}
      </Typography>
    </div>
  );
}
