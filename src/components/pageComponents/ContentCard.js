import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActionArea,
  Chip,
  CardHeader,
} from "@material-ui/core/";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
  Videocam as VideoIcon,
  Mic as AudioIcon,
  Notes as TextIcon,
  EmojiSymbols,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  setFavoriteItem,
  deleteFavoriteItem,
} from "../services/contentProvider";
import { useAuthState } from "../hooks/useAuthState";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "16px",
  },

  cardContent: {
    paddingTop: "0px",
  },

  typeIcon: {
    color: theme.palette.text.main,
  },

  title: {
    color: theme.palette.text.main,
    textAlign: "start",
    marginBottom: "8px",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.main,
    outline: "0",
  },

  text: {
    color: theme.palette.text.main,
    textAlign: "start",
  },

  heartButton: {
    color: theme.palette.secondary.main,
    marginTop: "4px",
    marginLeft: "auto",
  },

  chip: {
    marginRight: "8px",
    marginBottom: "16px",
    float: "left",
    color: theme.palette.background.lightgrey,
    background: theme.palette.primary.light,
  },
}));

export default function ContentCard(props) {
  const classes = useStyles();
  const userId = useAuthState();
  const { data, match } = props;
  const [favorite, setFavorite] = React.useState(data.favorite);

  let path = match
    ? `/category/${match.params.category}/${match.params.subcategory}/${data.id}`
    : `/content/${data.id}`;

  let typeIcon;

  switch (data.type) {
    case "Video":
      typeIcon = <VideoIcon className={classes.typeIcon} />;
      break;
    case "Audio":
      typeIcon = <AudioIcon className={classes.typeIcon} />;
      break;
    case "Text":
      typeIcon = <TextIcon className={classes.typeIcon} />;
      break;
    default:
      typeIcon = <EmojiSymbols className={classes.typeIcon} />;
  }

  const handleFavoriteClick = () => {
    if (favorite) {
      deleteFavoriteItem(data.id, userId)
        .then((_) => setFavorite(false))
        .catch((error) => console.log("Error deleting favorite: ", error));
    } else {
      setFavoriteItem(data.id, userId)
        .then((_) => setFavorite(true))
        .catch((error) => console.log("Error setting favorite: ", error));
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={typeIcon}
        title={
          <Typography variant="body2" className={classes.text}>
            {data.type} {data.duration}
          </Typography>
        }
        action={
          <IconButton
            size="small"
            className={classes.heartButton}
            onClick={handleFavoriteClick}
          >
            {favorite ? <FavoriteIcon /> : <FavoriteOutlinedIcon />}
          </IconButton>
        }
      />
      {/* via CardMedia component a image could be added here */}
      <Link to={path} className={classes.link}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" id="test" className={classes.title}>
              {data.title}
            </Typography>
            {data.tags
              ? data.tags.map((tag, index) => {
                  return (
                    <Chip
                      label={tag}
                      size="small"
                      key={index}
                      className={classes.chip}
                    />
                  );
                })
              : ""}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
