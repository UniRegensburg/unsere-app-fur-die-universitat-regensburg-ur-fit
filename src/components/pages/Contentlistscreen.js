import React, { useState, useEffect } from "react";
import { makeStyles, Typography, CircularProgress } from "@material-ui/core/";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import { Link } from "react-router-dom";
import {
  getContentItemsBySubcategory,
  getContentItemsByCategory,
  getUserFavoritesOnce,
  getStructureOnce,
} from "../services/contentProvider";
import { useAuthState } from "../hooks/useAuthState";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "16px",
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

  select: {
    float: "right",
  },
}));

export default function Contentlistscreen(props) {
  const classes = useStyles();
  const userId = useAuthState();
  const [sort, setSort] = useState("Länge");
  const [contentList, setContentList] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const { match } = props;
  let subcategory = match.params.subcategory;
  let category = match.params.category;

  useEffect(() => {
    if (subcategory === "allContents") {
      setTitle("Alle Inhalte");
    } else {
      getStructureOnce().then((structure) => {
        Promise.all(structure.docs.map((content) => content.data())).then(
          (appStructure) => {
            appStructure.forEach((categoryInst) => {
              categoryInst.subcategories.forEach((subcategoryInst) => {
                if (subcategoryInst.value === subcategory) {
                  setTitle(subcategoryInst.title);
                }
              });
            });
          }
        );
      });
    }
  }, [subcategory]);

  useEffect(() => {
    const checkFavorite = async (contents) => {
      let contentItems = contents;
      getUserFavoritesOnce(userId).then((user) => {
        let favorites = user.data().favorites;
        let favoritesIds = favorites.map((item) => item.id);
        contentItems.forEach((content) => {
          if (favoritesIds.includes(content.id)) {
            content.favorite = true;
          } else {
            content.favorite = false;
          }
        });
        setContentList(contentItems);
        setLoading(false);
      });
    };

    let unsubscribe = () => null;
    try {
      if (subcategory !== "allContents") {
        unsubscribe = getContentItemsBySubcategory(category, subcategory, {
          next: (querySnapshot) => {
            let contentRefs = querySnapshot.docs;
            Promise.all(
              contentRefs.map((contentRef) => contentRef.data())
            ).then((results) => {
              checkFavorite(results);
            });
          },
        });
      } else {
        unsubscribe = getContentItemsByCategory(category, {
          next: (querySnapshot) => {
            let contentRefs = querySnapshot.docs;
            Promise.all(
              contentRefs.map((contentRef) => contentRef.data())
            ).then((results) => {
              checkFavorite(results);
            });
          },
        });
      }
    } catch {
      setLoading(false);
    }
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [subcategory, category, userId]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
    // todo: sort content accordingly
  };

  return (
    <div className="Contentlistscreen">
      <TopAppBar data-testid="appbar" title={title} favIcon="visible" />
      <div className={classes.container}>
        <div className={classes.header}>
          <Link to={`/category/${match.params.category}`} replace>
            <ArrowBackIcon className={classes.back} />
          </Link>
          <FormControl className={classes.select}>
            <Select
              native
              value={sort}
              onChange={handleSortChange}
              inputProps={{
                name: "sort",
                id: "sort-select",
              }}
            >
              <option>Länge</option>
              <option>Alphabet</option>
              <option>Favorit</option>
            </Select>
          </FormControl>
        </div>
        {loading ? (
          <CircularProgress />
        ) : contentList.length === 0 ? (
          <Typography variant="subtitle2" className={classes.text}>
            Leider bisher keine Übungen verfügbar :(
          </Typography>
        ) : (
          <div>
            {contentList.map((item, index) => (
              <ContentCard
                match={match}
                data-testid="content-item"
                data={item}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
