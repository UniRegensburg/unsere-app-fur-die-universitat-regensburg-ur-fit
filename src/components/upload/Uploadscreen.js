import React, { useEffect, useState } from "react";
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
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import AddIcon from "@material-ui/icons/Add";
import {
  getContentsBySubcategories,
  getStructureOnce,
  getContentById,
  uploadFileToFirebaseStorage,
  getFileReference,
  uploadContentToFirestorage,
  addNewSubcategory,
} from "../services/contentProvider";
import HandleContentShown from "./UploadscreenContent";
import SubcategoryList from "./SubcategoryList";

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
  inputTitle: {
    maxWidth: "350px",
    margin: "8px",
    display: "flex",
  },
  radioButton: {
    display: "flex",
  },
  formButton: {
    margin: "16px",
    color: theme.palette.secondary.main,
  },
  addTagButton: {
    textTransform: "none",
    color: "#000000",
    fontWeight: "normal",
  },
}));

export default function Uploadscreen() {
  const classes = useStyles();
  const [
    clickedSubcategoriesRelaxation,
    setClickedSubcategoriesRelaxation,
  ] = useState([]);
  const [
    clickedSubcategoriesFitness,
    setClickedSubcategoriesFitness,
  ] = useState([]);
  const [
    clickedSubcategoriesWellbeing,
    setClickedSubcategoriesWellbeing,
  ] = useState([]);
  const [
    clickedSubcategoriesNutrition,
    setClickedSubcategoriesNutrition,
  ] = useState([]);
  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState([]);
  const [subcategoryFitness, setSubcategoryFitness] = useState([]);
  const [subcategoryRelaxation, setSubcategoryRelaxation] = useState([]);
  const [subcategoryNutrition, setSubcategoryNutrition] = useState([]);
  const [subcategoryWellbeing, setSubcategoryWellbeing] = useState([]);
  const [formChanges, setFormChanges] = useState(0);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);

  // reducer: transforms SubcategoryArry to AubcategoryCheckboxListState
  const reducer = (accumulator, currentValue) => {
    let valueCheckboxes = Object.assign(accumulator, {
      [currentValue.value]: false,
    });
    return valueCheckboxes;
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackbarOpen(false);
  };

  useEffect(() => {
    getStructureOnce().then((structure) => {
      Promise.all(structure.docs.map((content) => content.data())).then(
        (appStructure) => {
          let fitnessSubcategories = appStructure.find(
            (subcategory) => subcategory.value === "fitness"
          ).subcategories;
          let nutritionSubcategories = appStructure.find(
            (subcategory) => subcategory.value === "nutrition"
          ).subcategories;
          let wellbeiongSubcategories = appStructure.find(
            (subcategory) => subcategory.value === "wellbeing"
          ).subcategories;
          let relaxationSubcategories = appStructure.find(
            (subcategory) => subcategory.value === "relaxation"
          ).subcategories;
          setSubcategoryFitness(fitnessSubcategories);
          setSubcategoryNutrition(nutritionSubcategories);
          setSubcategoryRelaxation(relaxationSubcategories);
          setSubcategoryWellbeing(wellbeiongSubcategories);
        }
      );
    });
  }, []);

  useEffect(() => {
    if (
      clickedSubcategoriesFitness.length > 0 ||
      clickedSubcategoriesNutrition.length > 0 ||
      clickedSubcategoriesWellbeing.length > 0 ||
      clickedSubcategoriesRelaxation.length > 0
    ) {
      let subcategoriesChosen = clickedSubcategoriesFitness.concat(
        clickedSubcategoriesNutrition,
        clickedSubcategoriesRelaxation,
        clickedSubcategoriesWellbeing
      );
      getContentsBySubcategories(subcategoriesChosen).then((result) => {
        let contents = result.docs;
        let tagList = [];
        Promise.all(contents.map((content) => getContentById(content.id)))
          .then((result) =>
            result.forEach((contentItem) => {
              let contentData = contentItem.data();
              tagList = tagList.concat(contentData.tags);
            })
          )
          .then(() => {
            let uniqueTags = [...new Set(tagList)];
            setTags(uniqueTags.concat(newTags));
          });
      });
    } else {
      setTags(newTags);
    }
  }, [
    formChanges,
    clickedSubcategoriesNutrition,
    clickedSubcategoriesRelaxation,
    clickedSubcategoriesWellbeing,
    clickedSubcategoriesFitness,
    newTags,
  ]);

  function handleSubcategoryChangeRelaxation(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesRelaxation,
      setClickedSubcategoriesRelaxation,
      subcategoryClicked,
      valueOfClick
    );
  }

  function handleSubcategoryChangeFitness(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesFitness,
      setClickedSubcategoriesFitness,
      subcategoryClicked,
      valueOfClick
    );
  }

  function handleSubcategoryChangeWellbeing(subcategoryClicked, valueOfClick) {
    handleCheckboxArrayChange(
      clickedSubcategoriesWellbeing,
      setClickedSubcategoriesWellbeing,
      subcategoryClicked,
      valueOfClick
    );
  }

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
      setFormChanges(formChanges + 1);
      setArray(checkboxArray);
    }
    if (!valueOfClick) {
      const index = checkboxArray.indexOf(checkboxClicked);
      if (index > -1) {
        checkboxArray.splice(index, 1);
        setFormChanges(formChanges + 1);
        setArray(checkboxArray);
      }
    }
  }

  // radio-buttons: which input field is displayed
  const [radioButtonValue, setRadioButtonValue] = useState("Video");

  const handleChangeRadio = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const [titleInput, setTitleInput] = useState("");

  const handleTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  let allTagsObject = {};
  const [allClickedTags, setallClickedTags] = useState([]);
  tags.reduce(reducer, allTagsObject);

  const handleChangeTags = (event) => {
    handleCheckboxArrayChange(
      allClickedTags,
      setallClickedTags,
      event.target.name,
      event.target.checked
    );
  };

  const [tagDialogOpen, setTagDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setTagDialogOpen(true);
  };

  const handleClose = () => {
    setTagDialogOpen(false);
  };

  const handleAddTag = () => {
    let newTagList = newTags;
    newTagList.push(inputTag);
    setNewTags(newTagList);
    setFormChanges(formChanges + 1);
    setTagDialogOpen(false);
  };

  const [inputTag, setInputTag] = useState("");

  const handleinputTag = (event) => {
    setInputTag(event.target.value);
  };

  const [textInput, setTextInput] = useState("");
  const handleTextInput = (event) => {
    setTextInput(event.target.value);
  };

  const [selectedAudio, setSelectedAudio] = useState();
  const handleAudioInput = (event) => {
    setSelectedAudio(event.target.files[0]);
  };

  const [lengthAudioInput, setLengthAudioInput] = useState("");
  const handleLengthAudioInput = (event) => {
    setLengthAudioInput(event.target.value);
  };

  const [urlVideoInput, setUrlVideoInput] = useState("");
  const handleUrlVideoInput = (event) => {
    setUrlVideoInput(event.target.value);
  };

  const [lengthVideoInput, setLengthVideoInput] = useState("");
  const handleLengthVideoInput = (event) => {
    setLengthVideoInput(event.target.value);
  };
  const constructFirebaseObjects = async (
    objectDuration,
    objectSource,
    objectSubcategory,
    objectTags,
    objectTitle,
    objectType
  ) => {
    let firebaseObjects = [];
    await objectSubcategory.forEach(async (subcategory) => {
      let object = {};
      object.category = subcategory.category;
      object.duration = objectDuration;
      object.source = objectSource;
      object.subcategory = subcategory.value;
      object.tags = objectTags;
      object.title = objectTitle;
      object.type = objectType;
      firebaseObjects.push(object);
      if (subcategory.new !== undefined) {
        await addNewSubcategory(subcategory);
      }
    });
    return firebaseObjects;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let totalSubcategories = clickedSubcategoriesNutrition.concat(
      clickedSubcategoriesRelaxation,
      clickedSubcategoriesWellbeing,
      clickedSubcategoriesFitness
    );
    let type = radioButtonValue;
    let title = titleInput;
    let tags = allClickedTags;
    let audioFile = selectedAudio;
    let audioLength = lengthAudioInput;

    if (type === "Audio") {
      let fileName = title + Math.random().toString(36);
      uploadFileToFirebaseStorage(audioFile, fileName).then(async () => {
        await getFileReference(fileName).then(async (ref) => {
          let firebaseObjects = await constructFirebaseObjects(
            audioLength,
            ref,
            totalSubcategories,
            tags,
            title,
            type
          );
          await uploadContentToFirestorage(firebaseObjects).then(() => {
            setSuccessSnackbarOpen(true);
            setTimeout(() => {
              window.location.reload(false);
            }, 2000);
          });
        });
      });
    } else {
      let source = "";
      let length = "";
      if (type === "Video") {
        source = urlVideoInput;
        length = lengthVideoInput;
      } else {
        source = textInput;
      }
      let firebaseObjects = await constructFirebaseObjects(
        length,
        source,
        totalSubcategories,
        tags,
        title,
        type
      );
      uploadContentToFirestorage(firebaseObjects).then(() => {
        setSuccessSnackbarOpen(true);
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      });
    }
  };
  // dialog cancel-button
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

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
            <List subheader={<li />} className={classes.list}>
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeRelaxation}
                    subcategories={subcategoryRelaxation}
                    setSubcategory={setSubcategoryRelaxation}
                    category={"Entspannung"}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List subheader={<li />} className={classes.list}>
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeFitness}
                    subcategories={subcategoryFitness}
                    setSubcategory={setSubcategoryFitness}
                    category={"Fitness"}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List subheader={<li />} className={classes.list}>
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeWellbeing}
                    subcategories={subcategoryWellbeing}
                    setSubcategory={setSubcategoryWellbeing}
                    category={"Wohlbefinden"}
                  ></SubcategoryList>
                </ul>
              </li>
            </List>
          </Grid>
          <Grid item>
            <List subheader={<li />} className={classes.list}>
              <li>
                <ul>
                  <SubcategoryList
                    onSubcategoryChange={handleSubcategoryChangeNutrition}
                    subcategories={subcategoryNutrition}
                    setSubcategory={setSubcategoryNutrition}
                    category={"Ernährung"}
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
                value={radioButtonValue}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="Video"
                  control={<Radio color={"primary"} />}
                  label="Video"
                />
                <FormControlLabel
                  value="Audio"
                  control={<Radio color={"primary"} />}
                  label="Audio"
                />
                <FormControlLabel
                  value="Text"
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
              label="Geben Sie den Titel an"
              defaultValue="title"
              fullWidth
              className={classes.inputTitle}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} variant="middle" />
        {HandleContentShown(
          radioButtonValue,
          urlVideoInput,
          handleUrlVideoInput,
          lengthVideoInput,
          handleLengthVideoInput,
          textInput,
          handleTextInput,
          handleAudioInput,
          lengthAudioInput,
          handleLengthAudioInput
        )}
        <Divider className={classes.divider} variant="middle" />
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <FormLabel component="legend" className={classes.lable}>
              Tags:
            </FormLabel>
          </Grid>
          {tags.map((tag, index) => (
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
          open={tagDialogOpen}
          onClose={handleClose}
          aria-labelledby="add-tag-dialog-title"
        >
          <DialogTitle id="add-tag-dialog-title">Tag hinzufügen</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Geben Sie einen neuen Tag ein:
            </DialogContentText>
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
          className={classes.formButton}
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
            {"Wollen Sie die Eingaben löschen?"}
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
        <Button variant="text" type="submit" className={classes.formButton}>
          Content absenden
        </Button>
      </form>
      <CustomSnackbar
        open={successSnackbarOpen}
        onClose={closeSnackbar}
        message="Inhalt wurde erfolgreich hochgeladen!"
        type="success"
      />
    </div>
  );
}
