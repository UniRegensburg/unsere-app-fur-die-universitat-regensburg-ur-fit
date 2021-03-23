import React from "react";
import {
  makeStyles,
  ListItem,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core/";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import * as Constants from "../../constants/constants.js";

const useStyles = makeStyles((theme) => ({
  subcategoryList: {
    marginLeft: "8px",
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

  return (
    <div>
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
    </div>
  );
}
