import React from "react";
import { makeStyles, Card, CardContent, IconButton } from "@material-ui/core/";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
  Videocam as VideoIcon,
  Mic as AudioIcon,
  Notes as TextIcon,
  EmojiSymbols,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "solid 2px #00817B",
    marginBottom: "16px",
  },

  cardContent: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },

  typeIcon: {
    float: "left",
    marginRight: "8px",
  },

  title: {
    color: "#2E303C",
    textAlign: "start",
    fontSize: "large",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
    display: "flex",
    marginRight: "8px",
  },

  heartButton: {
    color: "#A7525E",
    marginLeft: "auto",
  },
}));

export default function ContentCard(props) {
  const classes = useStyles();
  const { data } = props;
  const [favorite, setFavorite] = React.useState(data.favorite);

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
    setFavorite(!favorite);
    // todo: save state to backend
  };
  const handleTitleClick = (event) => {
    console.log(event.target.id);
    // todo: id should be set to entry id of database
    // todo: change to detail screen
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.text}>
          {typeIcon}
          <span className={classes.text}>{data.type}</span>
          <span className={classes.text}>{data.duration}</span>
        </div>
        <p id="test" className={classes.title} onClick={handleTitleClick}>
          {data.title}
        </p>
        <div className={classes.text}>
          {data.tags.map((tag, index) => {
            return (
              <span className={classes.text} key={index}>
                {tag}
              </span>
            );
          })}
          <IconButton
            size="small"
            className={classes.heartButton}
            onClick={handleFavoriteClick}
          >
            {favorite ? <FavoriteIcon /> : <FavoriteOutlinedIcon />}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
