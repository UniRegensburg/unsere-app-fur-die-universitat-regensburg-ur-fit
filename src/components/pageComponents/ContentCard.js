import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  IconButton,
  Typography,
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
    marginTop: "8px",
    marginBottom: "8px",
  },

  link: {
    textDecoration: "none",
    color: "black",
    outline: 0,
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
    setFavorite(!favorite);
    // todo: save state to backend
  };

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Link className={classes.link} to={path}>
          <div className={classes.text}>
            {typeIcon}
            <Typography variant="body2" className={classes.text}>
              {data.type}
            </Typography>
            <Typography variant="body2" className={classes.text}>
              {data.duration}
            </Typography>
          </div>
          <Typography variant="body1" id="test" className={classes.title}>
            {data.title}
          </Typography>
        </Link>
        <div className={classes.text}>
          {data.tags.map((tag, index) => {
            return (
              <Typography
                variant="caption"
                className={classes.text}
                key={index}
              >
                {tag}
              </Typography>
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
