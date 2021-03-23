import React from "react";
import {
  makeStyles,
  IconButton,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  GridList,
  GridListTile,
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  FavoriteBorder as FavoriteOutlinedIcon,
} from "@material-ui/icons";
import VideoDetail from "../pageComponents/Videodetail";
import AudioDetail from "../pageComponents/Audiodetail";
import TextDetail from "../pageComponents/TextDetail";
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import { Link } from "react-router-dom";
//import firebase from "../services/firebase-init";

// obviously this data has to be replaced by real data according to the subcategory
import * as Constants from "../../constants/constants.js";
import SubcategoryList from "../pageComponents/SubcategoryList";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "24px",
    marginStart: "16px",
    marginEnd: "16px",
    position: "relative",
  },
  divider: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  headline: {
    color: "#2E303C",
    /* textAlign: "start", */
    margin: "16px",
  },
  list: {
    maxWidth: "200px;",
  },
  lable_category: {
    marginTop: "21px",
  },
  input_title: {
    maxWidth: "350px",
    margin: "8px",
    display: "flex",
  },
  radioButton: {
    display: "flex",
  },
  senden_Button: {
    margin: "16px",
    textAlign: "start",
  },
  topborder: {
    borderLeft: "1.5px solid" + theme.palette.secondary.main,
  },
}));

// mimics firebase behavior
// todo: replace with firebase-call
export default function Uploadscreen(props) {
  const classes = useStyles();

  // reducer für generierte Checkboxen
  const reducer = (accumulator, currentValue) => {
    let wert = Object.assign(accumulator, { [currentValue.value]: false });
    return wert;
  };

  // Categories
  let categories = [
    Constants.pages.relaxation.title,
    Constants.pages.fitness.title,
    Constants.pages.wellbeing.title,
    Constants.pages.nutrition.title,
  ];

  const [stateCategories, setStateCategories] = React.useState({
    stateRelaxation: false,
    stateFitness: false,
    stateWellbeing: false,
    stateNutrition: false,
  });

  const handleChangeCategory = (event) => {
    setStateCategories({
      ...stateCategories,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    stateRelaxation,
    stateFitness,
    stateWellbeing,
    stateNutrition,
  } = stateCategories;

  // Subcategory
  // Fitness
  let subcategoriesFitness = Constants.pages.fitness.subcategories;

  // Entspannung
  let subcategoriesRelaxation = Constants.pages.relaxation.subcategories;

  // Wohlbefinden
  let subcategoriesWellbeing = Constants.pages.wellbeing.subcategories;

  // Ernährung Nutrition
  //todo: Mensa rausnehmen !!
  let subcategoriesNutrition = Constants.pages.nutrition.subcategories;

  //Gecklickte Subkategorien
  const [
    clickedSubcategoriesRelaxation,
    setClickedSubcategoriesRelaxation,
  ] = React.useState([]);
  function handleSubcategoryChangeRelaxation(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesRelaxation,
      setClickedSubcategoriesRelaxation,
      subcategoryClicked,
      valueOfClick
    );
    if (clickedSubcategoriesRelaxation.length > 0) {
      setStateCategories({
        ...stateCategories,
        stateRelaxation: true,
      });
    }
  }

  const [
    clickedSubcategoriesFitness,
    setClickedSubcategoriesFitness,
  ] = React.useState([]);
  function handleSubcategoryChangeFitness(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesFitness,
      setClickedSubcategoriesFitness,
      subcategoryClicked,
      valueOfClick
    );
    if (clickedSubcategoriesFitness.length > 0) {
      setStateCategories({
        ...stateCategories,
        stateFitness: true,
      });
    }
  }

  const [
    clickedSubcategoriesWellbeing,
    setClickedSubcategoriesWellbeing,
  ] = React.useState([]);
  function handleSubcategoryChangeWellbeing(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesWellbeing,
      setClickedSubcategoriesWellbeing,
      subcategoryClicked,
      valueOfClick
    );
    if (clickedSubcategoriesWellbeing.length > 0) {
      setStateCategories({
        ...stateCategories,
        stateWellbeing: true,
      });
    }
  }

  const [
    clickedSubcategoriesNutrition,
    setClickedSubcategoriesNutrition,
  ] = React.useState([]);

  function handleSubcategoryChangeNutrition(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesNutrition,
      setClickedSubcategoriesNutrition,
      subcategoryClicked,
      valueOfClick
    );
    if (clickedSubcategoriesNutrition.length > 0) {
      setStateCategories({
        ...stateCategories,
        stateNutrition: true,
      });
    }
  }
  // ändert die Checkboxarrays die aktiv sind
  function handleCheckboxArrayChange(
    checkboxArray,
    setArray,
    checkboxClicked,
    valueOfClick
  ) {
    if (valueOfClick) {
      checkboxArray.push(checkboxClicked);
      setArray(checkboxArray);
      console.log(checkboxArray);
    }
    if (!valueOfClick) {
      const index = checkboxArray.indexOf(checkboxClicked);
      if (index > -1) {
        checkboxArray.splice(index, 1);
        setArray(checkboxArray);
      }
      console.log(checkboxArray);
    }
  }

  // Radio-Buttons
  const [value, setValue] = React.useState("video");

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  //Tags
  let allTags = ["fit", "zwischendrin", "Anfängerr", "Profi", "Nacken"];
  let allTagsObject = {};
  const [allClickedTags, setallClickedTags] = React.useState([]);
  /*   let allAktivTags = [];
   */ allTags.reduce(reducer, allTagsObject);
  const [checkedTag, setCheckedTag] = React.useState(false);

  const handleChangeTags = (event) => {
    /* if (event.target.checked) {
      console.log(allClickedTags);
      allClickedTags.push(event.target.name);
      console.log(allClickedTags);
    }
    if (!event.target.checked) {
      console.log(allClickedTags);
      const index = allClickedTags.indexOf(event.target.name);
      if (index > -1) {
        allClickedTags.splice(index, 1);
      }
      console.log(allClickedTags);
    } */
    setCheckedTag(event.target.checkedTag);
    handleCheckboxArrayChange(
      allClickedTags,
      setallClickedTags,
      event.target.name,
      event.target.checked
    );
  };

  // Submitt-Button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hier die Arrays");
    console.log(
      "Kategorien:",
      clickedSubcategoriesNutrition,
      clickedSubcategoriesRelaxation,
      clickedSubcategoriesWellbeing,
      clickedSubcategoriesFitness
    );
    console.log("Tags:", allClickedTags);
    console.log("Radiogroup", value);
  };
  /*
  - https://onestepcode.com/creating-a-material-ui-form/
  */
  return (
    <div>
      <Typography variant="h4" className={classes.headline}>
        Neuen Eintrag anlegen
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={1}>
          <FormLabel component="legend" className={classes.lable_category}>
            Kategorie:
          </FormLabel>
        </Grid>
        <Grid container item spacing={1} xs={11}>
          <Grid item>
            <List
              className={classes.root}
              subheader={<li />}
              className={classes.list}
            >
              <li>
                <ul>
                  <ListItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateRelaxation}
                          onChange={handleChangeCategory}
                          name="stateRelaxation"
                          color={"primary"}
                        />
                      }
                      label={categories[0]}
                    />
                    {console.log("rerender")}
                  </ListItem>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeRelaxation}
                    subcategoriesNames={subcategoriesRelaxation}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List className={classes.root} subheader={<li />}>
              <li>
                <ul>
                  <ListItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateFitness}
                          onChange={handleChangeCategory}
                          name="stateFitness"
                          color={"primary"}
                        />
                      }
                      label={categories[1]}
                    />
                  </ListItem>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeFitness}
                    subcategoriesNames={subcategoriesFitness}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List className={classes.root} subheader={<li />}>
              <li>
                <ul>
                  <ListItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateWellbeing}
                          onChange={handleChangeCategory}
                          name="stateWellbeing"
                          color={"primary"}
                        />
                      }
                      label={categories[2]}
                    />
                  </ListItem>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeWellbeing}
                    subcategoriesNames={subcategoriesWellbeing}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List className={classes.root} subheader={<li />}>
              <li>
                <ul>
                  <ListItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateNutrition}
                          onChange={handleChangeCategory}
                          name="stateNutrition"
                          color={"primary"}
                        />
                      }
                      label={categories[3]}
                    />
                  </ListItem>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeNutrition}
                    subcategoriesNames={subcategoriesNutrition}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
        </Grid>
      </Grid>

      <Divider className={classes.divider} variant="middle" />
      {/* <h2>Typ:</h2> */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <FormLabel component="legend">Typ:</FormLabel>
          </Grid>
          <Grid item xs={11}>
            <FormControl component="fieldset" className={classes.radioButton}>
              <RadioGroup
                row
                aria-label="inputType"
                name="inputType"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="video"
                  control={<Radio color={"primary"} />}
                  label="Video"
                />
                <FormControlLabel
                  value="audio"
                  control={<Radio color={"primary"} />}
                  label="Audio"
                />
                <FormControlLabel
                  value="text"
                  control={<Radio color={"primary"} />}
                  label="Text"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={1}>
            <FormLabel component="legend" className={classes.lable_category}>
              Titel:
            </FormLabel>
          </Grid>
          <Grid item xs={11}>
            <TextField
              /*  value={name}
          onChange={handleChange} */
              required
              id="title-input"
              label="Titel"
              defaultValue="title"
              fullWidth
              className={classes.input_title}
              /* Style auslagern !!! */
              style={{ margin: 8 }}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} variant="middle" />
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <FormLabel component="legend">Tags:</FormLabel>
          </Grid>
          {console.log(allTags)}
          {allTags.map((tag, index) => (
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allTagsObject.tag}
                    onChange={handleChangeTags}
                    name={tag}
                    key={index}
                    color={"primary"}
                  />
                }
                label={tag}
              />
            </Grid>
          ))}
        </Grid>
        {/* nur ausführbar wenn man requestet Felder ausgefüllt hat */}
        <Button
          variant="text"
          color="secondary"
          type="submit"
          className={classes.senden_Button}
        >
          Content absenden
        </Button>
      </form>
    </div>
  );
}
