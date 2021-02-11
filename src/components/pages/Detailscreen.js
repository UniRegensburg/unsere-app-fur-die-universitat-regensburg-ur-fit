import React from "react";
import { makeStyles, IconButton } from "@material-ui/core/";
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
} from "@material-ui/icons";
import VideoDetail from "../pageComponents/Videodetail";

import { Link } from "react-router-dom";

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
  const { match } = props;
  const backPath = match.params.subcategory
    ? `/category/${match.params.category}/${match.params.subcategory}`
    : `/`;

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    // todo: save state to backend
  };

  const contentData = props.item;

  let typeContent;
  switch (contentData.type) {
    case "Audio":
      // todo: typeContent = <AudioDetail data={audioTestData} />;
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
        <Link to={backPath} replace>
          <ArrowBackIcon className={classes.back} />
        </Link>

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
