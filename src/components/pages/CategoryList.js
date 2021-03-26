import React, { useEffect, useState } from "react";
import { List, makeStyles, CircularProgress } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";
import ExpandableListItem from "../pageComponents/ExpandableListItem";
import * as ContentProvider from "../services/contentProvider";

const useStyles = makeStyles((theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },
  text: {
    color: theme.palette.text.main,
  },
}));

export default function CategoryList(props) {
  const classes = useStyles();
  const { category, history, match } = props;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const allElements = {
    description: "Alle Inhalte aus dieser Kategorie",
    title: "Alle Inhalte",
    value: "allContents",
  };

  useEffect(() => {
    let unsubscribe = () => {};
    if (category === undefined) {
      console.log("UNDEF");
      unsubscribe = ContentProvider.getStructure({
        next: (querySnapshot) => {
          let appStructure = [];
          let structure = querySnapshot.docs;
          console.log(structure);
          Promise.all(
            structure.map((category) => appStructure.push(category.data()))
          ).then(() => {
            const category = appStructure.find(
              (element) => element.value === match.params.category
            );
            setTitle(category.title);
            setCategories(category.subcategories);
            setLoading(false);
          });
        },
      });
    } else {
      setTitle(category.title);
      setCategories(category.subcategories);
      setLoading(false);
    }
    return () => unsubscribe();
  }, [category, match.params.category]);

  return (
    <div>
      <TopAppBar data-testid="appbar" title={title} favIcon="visible" />
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.container}>
          <List>
            {[allElements].concat(categories).map((item, index) => (
              <ExpandableListItem
                key={index}
                name={item.title}
                description={item.description}
                link={`/category/${match.params.category}/${item.value}`}
                history={history}
              />
            ))}
          </List>
        </div>
      )}
      <BottomNavigationBar />
    </div>
  );
}
