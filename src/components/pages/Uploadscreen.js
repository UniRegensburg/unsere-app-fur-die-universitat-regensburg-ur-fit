import React from "react";
import {
  makeStyles,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  Divider,
  Typography,
  List,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";

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
  body: {
    padding: 20,
    paddingTop: 0,
  },
  divider: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  headline: {
    color: "#2E303C",
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
  input_title: {
    maxWidth: "350px",
    margin: "8px",
    display: "flex",
  },
  radioButton: {
    display: "flex",
  },
  form_Button: {
    margin: "16px",
    color: theme.palette.secondary.main,
  },
  add_Tag_Button: {
    textTransform: "none",
    color: "#000000",
    fontWeight: "normal",
  },
  textarea: {
    borderColor: theme.palette.primary.main,
    width: "100%",
  },
  input_Audio: {
    marginTop: "8px",
  },
  input_url: {
    minWidth: "400px",
  },
}));

// mimics firebase behavior
// todo: replace with firebase-call
export default function Uploadscreen(props) {
  const classes = useStyles();

  // reducer for generated Checkboxes
  const reducer = (accumulator, currentValue) => {
    let wert = Object.assign(accumulator, { [currentValue.value]: false });
    return wert;
  };
  // todo: Datenbank
  // Categories
  let categories = [
    Constants.pages.relaxation.title,
    Constants.pages.fitness.title,
    Constants.pages.wellbeing.title,
    Constants.pages.nutrition.title,
  ];

  // Subcategory
  // todo: Datenbank
  // fitness
  let subcategoriesFitness = Constants.pages.fitness.subcategories;

  // relaxation
  let subcategoriesRelaxation = Constants.pages.relaxation.subcategories;

  // wellbeing
  let subcategoriesWellbeing = Constants.pages.wellbeing.subcategories;

  // nutrition
  //todo: Mensa rausnehmen !!
  let subcategoriesNutrition = Constants.pages.nutrition.subcategories;

  //klicked Subkategories
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

  // change Checkboxarray
  function handleCheckboxArrayChange(
    checkboxArray,
    setArray,
    checkboxClicked,
    valueOfClick
  ) {
    if (valueOfClick) {
      checkboxArray.push(checkboxClicked);
      setArray(checkboxArray);
    }
    if (!valueOfClick) {
      const index = checkboxArray.indexOf(checkboxClicked);
      if (index > -1) {
        checkboxArray.splice(index, 1);
        setArray(checkboxArray);
      }
    }
  }

  // radio-buttons
  const [value, setValue] = React.useState("video");

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  //title-input
  const [titleInput, setTitleInput] = React.useState("");

  const handleTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  //tags
  // todo: Datenbank
  let allTags = ["fit", "zwischendrin", "Anfängerr", "Profi", "Nacken"];
  let allTagsObject = {};
  const [allClickedTags, setallClickedTags] = React.useState([]);
  allTags.reduce(reducer, allTagsObject);
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
  // tag-dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // todo: einpflegen Datenbank
  //neues array dann wieder in den State
  const handleAddTag = () => {
    setOpen(false);
  };

  const [inputTag, setInputTag] = React.useState("");

  const handleinputTag = (event) => {
    setInputTag(event.target.value);
  };

  // handle video-/audio-/text-input
  const handleContentShown = (aktiveRadio) => {
    switch (aktiveRadio) {
      case "video":
        return (
          <div>
            <Grid container spacing={3}>
              <Grid item>
                <FormLabel component="legend" className={classes.lable}>
                  Video hochladen:
                </FormLabel>
              </Grid>
              <Grid item>
                <TextField
                  value={urlVideoInput}
                  onChange={handleUrlVideoInput}
                  id="urlVideoInput"
                  label="Geben sie die URL des Videos an"
                  defaultValue="url"
                  shrink
                  className={classes.input_url}
                />
              </Grid>
              <Grid item>
                <TextField
                  value={lengthVideoInput}
                  onChange={handleLengthVideoInput}
                  id="lengthVideo"
                  label="Länge des Videos:"
                  defaultValue="00:00:00"
                  helperText="Format: hh:mm:ss"
                />
              </Grid>
            </Grid>
          </div>
        );

      case "text":
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
                  id="textInput"
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
        return (
          <div>
            <Grid container spacing={3}>
              <Grid item>
                <FormLabel component="legend" className={classes.lable}>
                  Audio hochladen:
                </FormLabel>
              </Grid>
              <Grid item>
                <input
                  type="file"
                  name="audioInput"
                  onChange={handleAudioInput}
                  className={classes.input_Audio}
                ></input>
              </Grid>
              <Grid item>
                <TextField
                  value={lengthAudioInput}
                  onChange={handleLengthAudioInput}
                  id="lengthAudio"
                  label="Länge des Audios:"
                  defaultValue="00:00:00"
                  helperText="Format: hh:mm:ss"
                />
              </Grid>
            </Grid>
          </div>
        );
    }
  };
  //--Text
  const [textInput, setTextInput] = React.useState("");
  const handleTextInput = (event) => {
    setTextInput(event.target.value);
  };

  //--Audio
  const [selectedAudio, setSelectedAudio] = React.useState();
  const handleAudioInput = (event) => {
    setSelectedAudio(event.target.files[0]);
  };

  const [lengthAudioInput, setLengthAudioInput] = React.useState("");
  const handleLengthAudioInput = (event) => {
    setLengthAudioInput(event.target.value);
  };

  //--Video
  const [urlVideoInput, setUrlVideoInput] = React.useState("");
  const handleUrlVideoInput = (event) => {
    setUrlVideoInput(event.target.value);
  };

  const [lengthVideoInput, setLengthVideoInput] = React.useState("");
  const handleLengthVideoInput = (event) => {
    setLengthVideoInput(event.target.value);
  };

  // submitt-button
  // todo: Datenbank
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
    console.log(value);
    switch (value) {
      case "video":
        console.log("video:", urlVideoInput, lengthVideoInput);
        break;
      case "text":
        console.log("text:", textInput);
        break;
      case "audio":
        console.log("audio:", selectedAudio, lengthAudioInput);
        break;
    }
  };
  // dialog cancel-button
  const [openCancelDialog, setOpenCancelDialog] = React.useState(false);

  const handleClickOpenCancelDialog = () => {
    setOpenCancelDialog(true);
  };

  const handleCloseCancelDialogNegative = () => {
    setOpenCancelDialog(false);
  };
  const handleCloseCancelDialogPositive = () => {
    setOpenCancelDialog(false);
    window.location.reload(false);
  };

  return (
    <div className={classes.body}>
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
              className={classes.add_Tag_Button}
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
          aria-labelledby="add-tag-dialog-title"
        >
          <DialogTitle id="add-tag-dialog-title">Tag hienzufügen</DialogTitle>
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
        <Button
          variant="text"
          color="secondary"
          className={classes.form_Button}
          onClick={handleClickOpenCancelDialog}
        >
          Abbrechen
        </Button>
        <Dialog
          open={openCancelDialog}
          onClose={handleCloseCancelDialogNegative}
          aria-labelledby="cansel-dialog-title"
        >
          <DialogTitle id="cansel-dialog-title">
            {"Wollen sie die Eingaben löschen?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseCancelDialogPositive} color="primary">
              ja
            </Button>
            <Button
              onClick={handleCloseCancelDialogNegative}
              color="primary"
              autoFocus
            >
              nein
            </Button>
          </DialogActions>
        </Dialog>
        <Button variant="text" type="submit" className={classes.form_Button}>
          Content absenden
        </Button>
      </form>
    </div>
  );
}
