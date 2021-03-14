import React, { useEffect, useState } from "react";
import { makeStyles, IconButton, CircularProgress } from "@material-ui/core/";
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
import { getContentById } from "../services/contentProvider";

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
    color: theme.palette.text.main,
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
  const [favorite, setFavorite] = useState(false);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, toggleOpen] = useState(false);
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

  useEffect(() => {
    getContentById(match.params.contentId).then((content) => {
      setContentType(content.data());
    });
  }, [match.params.contentId]);

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
  const setContentType = (item) => {
    switch (item.type) {
      case "Audio":
        setContent(<AudioDetail data={item} />);
        setLoading(false);
        break;
      case "Video":
        setContent(<VideoDetail data={item} />);
        setLoading(false);
        break;
      case "Text":
        setContent(<TextDetail data={item} />);
        setLoading(false);
        break;
      default:
        setContent(null);
        setLoading(false);
        break;
    }
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
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

          {content}
        </div>
      )}
    </div>
  );
}
