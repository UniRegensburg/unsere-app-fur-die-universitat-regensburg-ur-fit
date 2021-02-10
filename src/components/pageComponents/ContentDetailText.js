import React from 'react'
import {
    makeStyles,
  } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
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

export default function ContentDetailText(props){
    const classes = useStyles();
    const { data } = props;
    return (
        <div className="ContentDetailText">
            <h3 className={classes.title} align="left"> { data.title } </h3>
            {data.tags.map((tag, index) => {
                return (
                <span className={classes.tag} key={index}>
                    {tag}
                </span>
                );
            })}
            <br></br>
            <p align="left">{ data.content }</p>
        </div>
    )
}