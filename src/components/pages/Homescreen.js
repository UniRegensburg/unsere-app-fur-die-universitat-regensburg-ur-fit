import React, { useState, useEffect } from "react";
import { makeStyles, Typography, CircularProgress } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import { getUserFavorites, getContentById } from "../services/contentProvider";
import InfoMessageCard from "../pageComponents/InfoMessageCard";

import BottomNavigationBar from "../pageComponents/BottomNavigationBar";
import { useAuthState } from "../hooks/useAuthState";

const useStyles = makeStyles((theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
    marginBottom: "60px",
    marginTop: "16px",
  },

  text: {
    color: theme.palette.text.main,
    textAlign: "start",
    marginTop: "8px",
    marginBottom: "8px",
  },
}));

export default function Homescreen() {
  const classes = useStyles();
  const userId = useAuthState();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getUserFavorites(userId, {
      next: (querySnapshot) => {
        let contentRefs = querySnapshot.data().favorites;
        Promise.all(
          contentRefs.map((contentRef) => getContentById(contentRef.id))
        ).then((results) => {
          setFavorites(
            results.map((contentItem) => {
              let content = contentItem.data();
              content.favorite = true;
              return content;
            })
          );
          setLoading(false);
        });
      },
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="Homescreen">
      <TopAppBar data-testid="appbar" title="URfit" />
      <div className={classes.container}>
        <Typography
          data-testid="title"
          variant="subtitle1"
          className={classes.text}
        >
          Hallo! Willkommen bei URfit.
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : favorites.length === 0 ? (
          <InfoMessageCard />
        ) : (
          <div>
            <Typography variant="subtitle2" className={classes.text}>
              Deine Lieblingsübungen
            </Typography>
            {favorites.map((item) => {
              return (
                <ContentCard
                  data-testid="content-item"
                  data={item}
                  key={item.id}
                />
              );
            })}
          </div>
        )}
      </div>
      <BottomNavigationBar />
    </div>
  );
}
