import React from "react";
import {
  makeStyles,
  ListItem,
  Checkbox,
  FormControlLabel,
  FormLabel,
  ListItemIcon,
  ListItemText,
  Dialog,
  Button,
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";

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
}));

export default function SubcategoryList({
  subcategories,
  category,
  onSubcategoryChange,
  setSubcategory,
}) {
  const classes = useStyles();

  const reducer = (accumulator, currentValue) => {
    let wert = Object.assign(accumulator, { [currentValue.value]: false });
    return wert;
  };

  let subcategoriesObject = {};

  subcategories.reduce(reducer, subcategoriesObject);

  const [stateSubcategory, setStateCategory] = React.useState({
    subcategoriesObject,
  });
  const handleChangeSubcategory = (subcategory, event) => {
    setStateCategory({
      ...stateSubcategory,
      [subcategory.value]: event.target.checked,
    });
    onSubcategoryChange(subcategory, event.target.checked);
  };

  // dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // todo: einpflegen Datenbank
  //neues array dann wieder in den State
  const handleAddSubcategory = () => {
    let subcategoryList = subcategories;
    let newSubcategory = {};
    newSubcategory.title = inputSubcategoryTitle;
    newSubcategory.description = inputSubcategoryDescription;
    newSubcategory.value = inputSubcategoryTitle.toLowerCase();
    newSubcategory.category = category.toLowerCase();
    newSubcategory.new = true;
    subcategoryList.push(newSubcategory);
    setSubcategory(subcategoryList);
    setOpen(false);
  };

  const [inputSubcategoryTitle, setInputSubcategoryTitle] = React.useState("");
  const [
    inputSubcategoryDescription,
    setInputSubcategoryDescription,
  ] = React.useState("");

  const handleinputSubcategoryTitle = (event) => {
    setInputSubcategoryTitle(event.target.value);
  };

  const handleinputSubcategoryDescription = (event) => {
    setInputSubcategoryDescription(event.target.value);
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
                checked={subcategory.subcategoriesObject}
                onChange={(e) => {
                  handleChangeSubcategory(subcategory, e);
                }}
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
        aria-labelledby="add-subcategory-dialog-title"
      >
        <DialogTitle id="add-subcategory-dialog-title">
          Subkategorie hienzufügen
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Geben sie eine neue Subkategorie ein:
          </DialogContentText>
          <TextField
            autoFocus
            value={inputSubcategoryTitle}
            onChange={handleinputSubcategoryTitle}
            margin="dense"
            id="name"
            label="Subkategorie"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            value={inputSubcategoryDescription}
            onChange={handleinputSubcategoryDescription}
            margin="dense"
            id="name"
            label="Beschreibung"
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
