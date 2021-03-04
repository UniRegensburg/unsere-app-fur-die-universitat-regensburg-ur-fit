import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#2E303C",
    textAlign: "start",
  },

  tag: {
    color: "#2E303C",
    marginRight: "8px",
    marginBottom: "8px",
    float: "left",
  },

  text: {
    color: "#2E303C",
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
