import React, { useState, useEffect } from "react";
import { makeStyles, CircularProgress } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import { getUserFavorites, getContentById } from "../services/contentProvider";

import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

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
          userFavorites.forEach((favorite, index, favs) => {
            getContentById(favorite.id).then((content) => {
              favorites.push(content.data());
              if (Object.is(favs.length - 1, index)) {
                setFavorites(
                  <div>
                    {favorites.map((item, index) => {
                      item.favorite = true;
                      return (
                        <ContentCard data-testid="content-item" data={item} />
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
        <h3 data-testid="title" className={classes.text}>
          Meine Lieblingsübungen
        </h3>
        {spinner}
      </div>
      <BottomNavigationBar />
    </div>
  );
}
