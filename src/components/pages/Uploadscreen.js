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
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
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
    maxWidth: "230px;",
  },
  lable: {
    marginTop: "8px",
    fontSize: "120%",
    textAligh: "end",
  },
  test: {
    minWidth: "1000px",
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
    color: theme.palette.secondary.main,
  },
  addTagButton: {
    textTransform: "none",
    /* color: "#2E303C", */
    color: "#000000",
    fontWeight: "normal",
  },
  hide: {
    display: "none",
  },
  textarea: {
    /* border: "solid 1px", */
    borderColor: theme.palette.primary.main,
    /*     borderColor: "#7a7979",
     */
    /* boxSizing: "border-box", */
    width: "100%",
    /* marginLeft: "8px", */

    length_video: {
      /* marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1), */
      width: 500,
    },
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

  //Titel
  const [titleInput, setTitleInput] = React.useState("");

  const handleTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  //Tags
  let allTags = ["fit", "zwischendrin", "Anfängerr", "Profi", "Nacken"];
  let allTagsObject = {};
  const [allClickedTags, setallClickedTags] = React.useState([]);
  /*   let allAktivTags = [];
   */ allTags.reduce(reducer, allTagsObject);
  const [checkedTag, setCheckedTag] = React.useState(false);

  const handleChangeTags = (event) => {
    setCheckedTag(event.target.checkedTag);
    handleCheckboxArrayChange(
      allClickedTags,
      setallClickedTags,
      event.target.name,
      event.target.checked
    );
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //eingabe in datenbank
  //dannn irgendwas zurück und damit state ändern
  const handleAddTag = () => {
    console.log("Eingabe:", inputTag);
    setOpen(false);
  };

  const [inputTag, setInputTag] = React.useState("");

  const handleinputTag = (event) => {
    setInputTag(event.target.value);
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
    console.log("Radiogroup:", value);
    console.log("Titel:", titleInput);
    console.log("Tags:", allClickedTags);
    console.log("Inhalt Text:", textInput);
  };

  // handel Video/Audio/Text Input
  const handleContentShown = (aktiveRadio) => {
    switch (aktiveRadio) {
      case "video":
        console.log("video");
        return (
          <div>
            <Grid container spacing={1}>
              <Grid item>
                <FormLabel component="legend" className={classes.lable}>
                  Video hochladen:
                </FormLabel>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="time"
                  label="Länge des Videos:"
                  type="number"
                  defaultValue="00"
                  min="1"
                  max="2"
                  /* className={classes.length_video} */
                />
                <textarea
                  data-testid="length-Video_Input"
                  /* className={classes.length_video}
              value={this.state.value} */
                  placeholder="Länge des Videos:"
                  /* onChange={this.handleChange} */
                  rows="1"
                  min="1"
                  max="2"
                />
              </Grid>
            </Grid>
          </div>
        );

      case "text":
        console.log("text");
        return (
          <div>
            <Grid container spacing={1}>
              <Grid item>
                <FormLabel component="legend" className={classes.lable}>
                  Texteingabe:
                </FormLabel>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  value={textInput}
                  onChange={handleTextInput}
                  id="text-input"
                  label="Bitte fügen sie hier ihren Text ein."
                  defaultValue="Text"
                  fullWidth
                  multiline
                  className={classes.textarea}
                  variant="outlined"
                  rows={7}
                />
              </Grid>
            </Grid>
          </div>
        );

      case "audio":
        console.log("audio");
        return (
          <div>
            <h6>Audio</h6>
            <input type="file"></input>
          </div>
        );
    }
  };
  //--Text
  const [textInput, setTextInput] = React.useState("");

  const handleTextInput = (event) => {
    setTextInput(event.target.value);
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
          <FormLabel component="legend" className={classes.lable}>
            Kategorie: *
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
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeRelaxation}
                    subcategoriesNames={subcategoriesRelaxation}
                    category={categories[0]}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List
              className={classes.root}
              subheader={<li />}
              className={classes.list}
            >
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeFitness}
                    subcategoriesNames={subcategoriesFitness}
                    category={categories[1]}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List
              className={classes.root}
              subheader={<li />}
              className={classes.list}
            >
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeWellbeing}
                    subcategoriesNames={subcategoriesWellbeing}
                    category={categories[2]}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List
              className={classes.root}
              subheader={<li />}
              className={classes.list}
            >
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeNutrition}
                    subcategoriesNames={subcategoriesNutrition}
                    category={categories[3]}
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
            <FormLabel component="legend" className={classes.lable}>
              Typ: *
            </FormLabel>
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
            <FormLabel component="legend" className={classes.lable}>
              Titel: *
            </FormLabel>
          </Grid>
          <Grid item xs={11}>
            <TextField
              value={titleInput}
              onChange={handleTitleInput}
              required
              id="title-input"
              label="Geben sie den Titel an"
              defaultValue="title"
              fullWidth
              className={classes.input_title}
              /* Style auslagern !!! */
              style={{ margin: 8 }}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} variant="middle" />
        {handleContentShown(value)}
        <Divider className={classes.divider} variant="middle" />
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <FormLabel component="legend" className={classes.lable}>
              Tags:
            </FormLabel>
          </Grid>
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
          <Grid item>
            <Button
              color="secondary"
              size="large"
              className={classes.addTagButton}
              onClick={handleClickOpen}
              startIcon={<AddIcon color={"secondary"} />}
            >
              Tag hinzufügen
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Tag hienzufügen</DialogTitle>
          <DialogContent>
            <DialogContentText>Geben sie eine neue Tag ein:</DialogContentText>
            <TextField
              autoFocus
              value={inputTag}
              onChange={handleinputTag}
              margin="dense"
              id="name"
              label="Tag"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              abbrechen
            </Button>
            <Button onClick={handleAddTag} color="secondary">
              hinzufügen
            </Button>
          </DialogActions>
        </Dialog>
        {/* nur ausführbar wenn man requestet Felder ausgefüllt hat */}
        <Button variant="text" type="submit" className={classes.senden_Button}>
          Content absenden
        </Button>
        {/* abbrechen butten*/}
      </form>
    </div>
  );
}
