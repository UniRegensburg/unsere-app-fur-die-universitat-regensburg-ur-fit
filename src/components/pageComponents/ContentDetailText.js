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
            <p align="left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</p>
        </div>
    )
}