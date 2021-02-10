import React from "react";
import { makeStyles, IconButton } from "@material-ui/core/";
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
} from "@material-ui/icons";
import VideoDetail from "../pageComponents/Videodetail";
import AudioDetail from "../pageComponents/Audiodetail";

import * as TestContent from "../../constants/testContent.js";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "24px",
    marginStart: "16px",
    marginEnd: "16px",
    position: "relative",
  },

  header: {
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

  video: {
    width: "100%",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
  },

  tag: {
    color: "#2E303C",
    marginRight: "8px",
    float: "left",
  },
}));

export default function Detailscreen(props) {
  const classes = useStyles();
  const [favorite, setFavorite] = React.useState(false);

  const getContentById = (id) => {
    // todo: get data from real backend
    for (let value of Object.values(TestContent.data)) {
      if (value.id === id) {
        return value;
      }
    }
  };

  const handleBackButtonClick = () => {
    // todo: go back to contentlist
    // coming from the contentlist with own url this is possible: props.history.goBack();
    // solution depends on how we show this screen!
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    // todo: save state to backend
  };

  const contentData = getContentById(props.id);

  let typeContent;
  switch (contentData.type) {
    case "Audio":
      typeContent = <AudioDetail data={contentData} />;
      break;
    case "Video":
      typeContent = <VideoDetail data={contentData} />;
      break;
    case "Text":
      // todo: typeContent = <TextDetail data={contentData} />;
      break;
    default:
      typeContent = null;
      break;
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
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

      {typeContent}
    </div>
  );
}
