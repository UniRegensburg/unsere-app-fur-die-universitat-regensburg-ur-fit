import React from 'react'

import { withStyles } from "@material-ui/core"

import ContentDetailHeader from "../pageComponents/ContentDetailHeader"
import ContentDetailText from "../pageComponents/ContentDetailText"

import * as TestContent from "../../constants/testContent.js";

const styles = (theme) => ({
    ContentDetailscreen: {
        marginTop: "24px",
        marginStart: "16px",
        marginEnd: "16px",
        position: "relative",
    },
  });

class ContentDetailscreen extends React.Component {

    render() {
        let testdata = TestContent.data;
        const { classes } = this.props;
        return (
            <div className={classes.ContentDetailscreen}>
                <ContentDetailHeader/>
                <ContentDetailText data={testdata.test3} />
            </div>
        )
    }
}

export default withStyles(styles)(ContentDetailscreen)