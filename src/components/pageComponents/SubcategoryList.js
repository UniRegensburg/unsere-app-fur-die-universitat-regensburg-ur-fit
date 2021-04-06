import React from "react";
import {
  makeStyles,
  ListItem,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Typography,
  ListItemIcon,
  ListItemText,
  Dialog,
  Button,
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  ListItemSecondaryAction,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import * as Constants from "../../constants/constants.js";

const useStyles = makeStyles((theme) => ({
  subcategoryList: {
    marginLeft: "8px",
  },
  category: {
    color: theme.palette.primary.main,
    fontWeight: "500",
    fontSize: "120%",
  },
  addIcon: {
    minWidth: "35px",
    color: theme.palette.secondary.main,
  },
  addButtonText: {
    fontSize: "10%",
    color: theme.palette.secondary.main,
  },
}));

export default function SubcategoryList(props) {
  const classes = useStyles();

  const reducer = (accumulator, currentValue) => {
    let wert = Object.assign(accumulator, { [currentValue.value]: false });
    return wert;
  };

  let subcategories = props.subcategoriesNames;
  let subcategoriesObject = {};
  let category = props.category;

  subcategories.reduce(reducer, subcategoriesObject);

  const [stateSubcategoryNutrition, setStateCategoryNutrition] = React.useState(
    {
      subcategoriesObject,
    }
  );
  const handleChangeSubcategory = (event) => {
    setStateCategoryNutrition({
      ...stateSubcategoryNutrition,
      [event.target.name]: event.target.checked,
    });
    console.log(event.target.checked);
    props.onSubcategoryChange(event.target.name, event.target.checked);
  };

  subcategoriesObject = stateSubcategoryNutrition;

  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //eingabe in datenbank
  //dannn irgendwas zurück und damit state ändern
  const handleAddSubcategory = () => {
    console.log("Eingabe:", inputSubcategory);
    setOpen(false);
  };

  const [inputSubcategory, setInputSubcategory] = React.useState("");

  const handleinputSubcategory = (event) => {
    setInputSubcategory(event.target.value);
  };
  return (
    <div>
      <ListItem>
        <FormLabel component="legend" className={classes.category}>
          {category}
        </FormLabel>
      </ListItem>
      {subcategories.map((subcategory, index) => (
        <ListItem className={classes.subcategoryList}>
          <FormControlLabel
            control={
              <Checkbox
                checked={subcategoriesObject.subcategory}
                onChange={handleChangeSubcategory}
                size="small"
                name={subcategory.value}
                key={index}
                color={"primary"}
              />
            }
            label={subcategory.title}
          />
        </ListItem>
      ))}
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon className={classes.addIcon}>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Subcategorie hinzufügen" />
      </ListItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Subkategorie hienzufügen
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Geben sie eine neue Subkategorie ein:
          </DialogContentText>
          <TextField
            autoFocus
            value={inputSubcategory}
            onChange={handleinputSubcategory}
            margin="dense"
            id="name"
            label="Subkategorie"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            abbrechen
          </Button>
          <Button onClick={handleAddSubcategory} color="secondary">
            hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
