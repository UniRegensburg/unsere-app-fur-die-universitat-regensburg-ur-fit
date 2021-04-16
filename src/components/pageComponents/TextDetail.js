import React from "react";
import { makeStyles, Typography, Chip } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.main,
    textAlign: "start",
  },

  chip: {
    marginRight: "8px",
    marginBottom: "16px",
    marginTop: "8px",
    float: "left",
    color: theme.palette.background.lightgrey,
    background: theme.palette.primary.light,
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
      <Typography variant="h6" className={classes.title}>
        {data.title}
      </Typography>
      {data.tags.map((tag, index) => {
        return (
          <Chip label={tag} size="small" key={index} className={classes.chip} />
        );
      })}
      <br></br>
      <Typography variant="body2" className={classes.text}>
        {data.source}
      </Typography>
    </div>
  );
}
