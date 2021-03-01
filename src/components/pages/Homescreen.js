import React, { useState, useEffect } from "react";
import { makeStyles, CircularProgress } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import { getUser, getContentById } from "../services/firebaseFetch";

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

  async function getFavorites() {
    var favorites = [];
    await getUser("paG8fp6bvWyoYAoYQ3uO").then((user) => {
      user.favoriten.forEach((fav, index, favs) =>
        getContentById(fav.id).then((item) => {
          favorites.push(item);
          if (Object.is(favs.length - 1, index)) {
            setFavorites(
              <div>
                {favorites.map((item, index) => {
                  item.favorite = true;
                  return <ContentCard data-testid="content-item" data={item} />;
                })}
              </div>
            );
          }
        })
      );
    });
  }

  useEffect(() => getFavorites());

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
