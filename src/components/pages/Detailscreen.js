import React from "react";
import { makeStyles, IconButton } from "@material-ui/core/";
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
} from "@material-ui/icons";
import VideoDetail from "../pageComponents/Videodetail";
import AudioDetail from "../pageComponents/Audiodetail";
import TextDetail from "../pageComponents/TextDetail";
import { Link } from "react-router-dom";
import CustomSnackbar from "../pageComponents/CustomSnackbar";

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

  share: {
    float: "right",
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
  const [snackbarOpen, toggleOpen] = React.useState(false);
  const snackbarMessage = "Link in Zwischenablage kopiert";

  const { match } = props;
  const backPath = match.params.subcategory
    ? `/category/${match.params.category}/${match.params.subcategory}`
    : `/`;

  const toggleSnackbar = () => {
    toggleOpen(!snackbarOpen);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    // todo: save state to backend
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        url: window.location.href,
        title: document.title,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toggleSnackbar();
    }
  };

  const contentData = props.item;

  let typeContent;
  switch (contentData.type) {
    case "Audio":
      typeContent = <AudioDetail data={contentData} />;
      break;
    case "Video":
      typeContent = <VideoDetail data={contentData} />;
      break;
    case "Text":
      typeContent = <TextDetail data={contentData} />;
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
          className={classes.share}
          onClick={handleShareClick}
        >
          <ShareIcon />
        </IconButton>

        <IconButton
          size="small"
          className={classes.favorite}
          onClick={handleFavoriteClick}
        >
          {favorite ? <FavoriteIcon /> : <FavoriteOutlinedIcon />}
        </IconButton>
        <CustomSnackbar
          open={snackbarOpen}
          onClose={toggleSnackbar}
          message={snackbarMessage}
        ></CustomSnackbar>
      </div>

      {typeContent}
    </div>
  );
}
