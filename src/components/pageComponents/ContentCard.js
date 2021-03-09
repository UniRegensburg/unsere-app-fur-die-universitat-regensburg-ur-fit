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

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "16px",
  },

  cardContent: {
    paddingTop: "0px",
  },

  typeIcon: {
    float: "left",
    marginRight: "8px",
  },

  title: {
    color: "#2E303C",
    textAlign: "start",
    marginBottom: "8px",
  },

  link: {
    textDecoration: "none",
    color: "black",
    outline: "0",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
  },

  heartButton: {
    color: "#A7525E",
    marginTop: "4px",
    marginLeft: "auto",
  },

  chip: {
    marginRight: "8px",
    marginBottom: "16px",
    float: "left",
    color: "#FBF9F9",
    background: "#00817B99",
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
