import React from "react";
import { makeStyles } from "@material-ui/core/";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";
import { useHistory } from "react-router-dom";

// obviously this data has to be replaced by real data according to the subcategory
import * as Constants from "../../constants/constants.js";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "16px",
    marginStart: "16px",
    marginEnd: "16px",
    marginBottom: "60px",
    position: "relative",
  },

  header: {
    width: "100%",
    height: "48px",
  },

  back: {
    float: "left",
  },

  select: {
    float: "right",
  },
}));

export default function Contentlistscreen(props) {
  const [sort, setSort] = React.useState("Länge");
  const history = useHistory();
  const classes = useStyles();
  const { title, match } = props;
  let data = Constants.pages;
  let category = match.params.category;
  let subcategory = match.params.subitem;

  const handleSortChange = (event) => {
    setSort(event.target.value);
    // todo: sort content accordingly
  };

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <div className="Contentlistscreen">
      <TopAppBar data-testid="appbar" title={title} />
      <div className={classes.container}>
        <div className={classes.header}>
          <ArrowBackIcon
            className={classes.back}
            onClick={handleBackButtonClick}
          />
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
        {data[category].subcategories
          .find((item) => {
            return subcategory === item.value;
          })
          .content.map((item, index) => (
            <ContentCard match={match} data-testid="content-item" data={item} />
          ))}
      </div>
      <BottomNavigationBar />
    </div>
  );
}
