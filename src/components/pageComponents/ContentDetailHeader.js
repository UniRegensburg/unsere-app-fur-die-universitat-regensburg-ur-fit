import React from 'react'

import { makeStyles, IconButton } from "@material-ui/core/";
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  
    ContentDetailHeader: {
      width: "100%",
      height: "48px",
    },
  
    back: {
      float: "left",
    },
  
    favorite: {
      float: "right",
      color: "#A7525E",
    },
  }));

export default function ContentDetailHeader(){
    const classes = useStyles();

    const [favorite, setFavorite] = React.useState(false);

    const handleBackButtonClick = () => {

    };
  
    const handleFavoriteClick = () => {
      setFavorite(!favorite);
      // todo: save state to backend
    };

    return (
        <div className={classes.ContentDetailHeader}>
            <ArrowBackIcon
            className={classes.back}
            onClick={handleBackButtonClick}
            />

            <IconButton
            size="small"
            className={classes.favorite}
            onClick={handleFavoriteClick}
            >
            {favorite ? <FavoriteIcon /> : <FavoriteOutlinedIcon />}
            </IconButton>
        </div>
    )
}
