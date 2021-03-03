import React, { useState, useEffect } from "react";
import { makeStyles, CircularProgress } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import { getUserFavorites, getContentById } from "../services/contentProvider";
import InfoMessageCard from "../pageComponents/InfoMessageCard";

import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

const username = "Viktor"; // get from db

const useStyles = makeStyles((theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
    marginBottom: "60px",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
  },

  card: {
    border: "solid 2px #00817B",
    marginBottom: "16px",
  },

  cardContent: {
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
}));

export default function Homescreen() {
  const classes = useStyles();
  const [spinner, setFavorites] = useState(<CircularProgress />);

  function getFavorites() {
    const unsubscribe = getUserFavorites(
      "701b389b848a2b1cfab867093101d8d5ac56addd",
      {
        next: (querySnapshot) => {
          var favorites = [];
          let userFavorites = querySnapshot.data().favorites;
          userFavorites.length === 0
            ? setFavorites(<InfoMessageCard />)
            : userFavorites.forEach((favorite, index, favs) => {
                getContentById(favorite.id).then((content) => {
                  favorites.push(content.data());
                  if (Object.is(favs.length - 1, index)) {
                    setFavorites(
                      <div>
                        <h3 data-testid="title" className={classes.text}>
                          Deine Lieblingsübungen
                        </h3>
                        {favorites.map((item, index) => {
                          item.favorite = true;
                          return (
                            <ContentCard
                              data-testid="content-item"
                              data={item}
                            />
                          );
                        })}
                      </div>
                    );
                  }
                });
              });
        },
      }
    );
    return unsubscribe;
  }

  useEffect(() => {
    getFavorites();
  }, [spinner, setFavorites]);

  return (
    <div className="Homescreen">
      <TopAppBar data-testid="appbar" title="URfit" />
      <div className={classes.container}>
        <h4 className={classes.text}>
          Hallo {username}! Willkommen bei URfit.
        </h4>
        {spinner}
      </div>
      <BottomNavigationBar />
    </div>
  );
}
