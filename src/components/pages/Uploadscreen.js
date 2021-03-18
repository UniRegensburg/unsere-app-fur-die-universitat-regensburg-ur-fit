import React from "react";
import {
  makeStyles,
  IconButton,
  Checkbox,
  FormControlLabel,
  Grid,
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
}));
/* class Feedbackscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fitness: ""};
    this.handleSubcategoryChange = this.handleSubcategoryChange.bind(this);

  } */
export default function Uploadscreen(props) {
  const classes = useStyles();

  // reducer für generierte Checkboxen
  //wie mach ich zu dem currentvalu noch "state" dazu?
  const reducer = (accumulator, currentValue) => {
    let wert = Object.assign(accumulator, { [currentValue.value]: false });
    return wert;
  };
  // mimics firebase behavior
  // todo: replace with firebase-call

  // Categories
  let categories = [
    Constants.pages.relaxation.title,
    Constants.pages.fitness.title,
    Constants.pages.wellbeing.title,
    Constants.pages.nutrition.title,
  ];
  /* const subcategries = Constants.pages.nutrition.subcategories;
  console.log(subcategries.map((element) => element.title)); */

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
  //Mensa rausnehmen !!
  let subcategoriesNutrition = Constants.pages.nutrition.subcategories;

  // Radio-Buttons
  const [value, setValue] = React.useState("video");

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  //Tags
  let allTags = ["fit", "zwischendrin", "anfängerr", "Profi", "Nacken"];
  let allTagsObject = {};

  allTags.reduce(reducer, allTagsObject);
  const [checkedTag, setCheckedTag] = React.useState(false);

  const handleChangeTags = (event) => {
    setCheckedTag(event.target.checkedTag);
  };

  //Gecklickte Subkategorien
  // für jede Kategorie eine eigene Handelmethode anlegen so das für jedes eigenes Array entsteht
  function handleSubcategoryChange(
    subcategoriesArray,
    subcategoriesClicked,
    valueOfClick
  ) {
    //console.log("hier sind dirnn:", subcategoriesClicked);
    //console.log(valueOfClick);
    if (valueOfClick) {
      subcategoriesArray.push(subcategoriesClicked);
      console.log(subcategoriesArray);
    }
    if (!valueOfClick) {
      //console.log(chlickedSubcategories.indexOf(subcategoriesClicked));
      const index = subcategoriesArray.indexOf(subcategoriesClicked);
      if (index > -1) {
        subcategoriesArray.splice(index, 1);
      }
      console.log(subcategoriesArray);
    }
  }
  handleSubcategoryChange = handleSubcategoryChange.bind(this);

  let chlickedSubcategoriesRelaxation = [];
  function handleSubcategoryChangeRelaxation(
    subcategoriesClicked,
    valueOfClick
  ) {
    return handleSubcategoryChange(
      chlickedSubcategoriesRelaxation,
      subcategoriesClicked,
      valueOfClick
    );
  }

  let chlickedSubcategoriesFitness = [];
  function handleSubcategoryChangeFitness(subcategoriesClicked, valueOfClick) {
    return handleSubcategoryChange(
      chlickedSubcategoriesFitness,
      subcategoriesClicked,
      valueOfClick
    );
  }
  let chlickedSubcategoriesWellbeing = [];
  function handleSubcategoryChangeWellbeing(
    subcategoriesClicked,
    valueOfClick
  ) {
    return handleSubcategoryChange(
      chlickedSubcategoriesWellbeing,
      subcategoriesClicked,
      valueOfClick
    );
  }
  let chlickedSubcategoriesNutrition = [];
  function handleSubcategoryChangeNutrition(
    subcategoriesClicked,
    valueOfClick
  ) {
    return handleSubcategoryChange(
      chlickedSubcategoriesNutrition,
      subcategoriesClicked,
      valueOfClick
    );
  }

  return (
    <div>
      <Typography variant="h3" component="h2">
        Neuen Eintrag anlegen
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={1}>
          <FormLabel component="legend">Kategorie: </FormLabel>
        </Grid>
        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <List className={classes.root} subheader={<li />}>
                <li>
                  <ul>
                    <ListItem>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={stateRelaxation}
                            onChange={handleChangeCategory}
                            name="stateRelaxation"
                          />
                        }
                        label={categories[0]}
                      />
                    </ListItem>
                    <SubcategoryList
                      onSubcategoryChange={handleSubcategoryChangeRelaxation}
                      subcategoriesNames={subcategoriesRelaxation}
                    ></SubcategoryList>
                  </ul>
                </li>
              </List>
            </Grid>
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
      </Grid>

      <Divider className={classes.divider} variant="middle" />
      {/* <h2>Typ:</h2> */}
      <Grid container justify="flex-start" spacing={1}>
        <Grid item xs={1}>
          <FormLabel component="legend">Typ:</FormLabel>
        </Grid>
        <Grid item xs={11}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="inputType"
              name="inputType"
              value={value}
              onChange={handleChangeRadio}
            >
              <FormControlLabel
                value="video"
                control={<Radio />}
                label="Video"
              />
              <FormControlLabel
                value="audio"
                control={<Radio />}
                label="Audio"
              />
              <FormControlLabel value="text" control={<Radio />} label="Text" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      {/*
- https://material-ui.com/components/radio-buttons/
- https://onestepcode.com/creating-a-material-ui-form/
*/}
      <form>
        <TextField
          /*  value={name}
          onChange={handleChange} */
          required
          id="title-input"
          label="Titel"
          defaultValue="title"
          margin="dense"
          fullWidth
          /* Style auslagern !!! */
          style={{ margin: 8 }}
          /* InputLabelProps={{
            shrink: true,
          }} */
        />
        <Divider className={classes.divider} variant="middle" />
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <FormLabel component="legend">Tags: </FormLabel>
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
                  />
                }
                label={tag}
              />
            </Grid>
          ))}
        </Grid>
      </form>
    </div>
  );
}
