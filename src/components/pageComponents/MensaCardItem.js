import { useState } from "react";

import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  Collapse,
  IconButton,
} from "@material-ui/core/";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  cardItem: {
    margin: "20px",
    boxShadow: "none",
    border: "2px solid",
    borderColor: "#00817B",
    paddingBottom: "5px",
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  cardTitle: {
    fontSize: "20px",
    textAlign: "left",
    wordWrap: "break-word",
  },
  cardSubtitle: {
    textAlign: "left",
    bottom: "0",
    whiteSpace: "pre-wrap",
    padding: "0px 0px 0px 16px",
  },
  label: {
    fontSize: "15px",
    textAlign: "right",
    paddingTop: "15px",
    paddingRight: "15px",
  },

  iconButton: {
    float: "right",
    padding: "20px 20px 20px 0px",
  },
}));

export default function MensaCard(props) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  let contentInfo = <br />;
  if (props.contentInfo.length > 0) {
    contentInfo = (
      <Typography
        data-testid="ingredients-subtitle"
        className={classes.cardSubtitle}
      >
        Inhaltstoffe:
        {props.contentInfo.map((ingredients, index) => {
          return "\n" + ingredients;
        })}
      </Typography>
    );
  }
  return (
    <Card
      onClick={() => setOpen(!open)}
      data-testid="card-item"
      className={classes.cardItem}
    >
      <Grid container direction="row">
        <Grid item xs={8}>
          <CardContent>
            <Typography data-testid="card-title" className={classes.cardTitle}>
              {props.title}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardContent className={classes.cardContent}>
            <Typography data-testid="card-label" className={classes.label}>
              {props.labels[0]}
            </Typography>
            <IconButton
              className={classes.iconButton}
              onClick={() => setOpen(!open)}
              data-testid="card-button"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardContent>
        </Grid>
      </Grid>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container>
          <CardContent className={classes.cardContent}>
            <Grid item>{contentInfo}</Grid>
            <Grid item>
              <Typography
                data-testid="price-subtitle"
                className={classes.cardSubtitle}
              >
                {"\n"}Preis: {props.price}
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
      </Collapse>
    </Card>
  );
}
