import React from "react";
import { ListItem, Checkbox, FormControlLabel } from "@material-ui/core/";
import * as Constants from "../../constants/constants.js";

export default function SubcategoryList(props) {
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
        <ListItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={subcategoriesObject.subcategory}
                onChange={handleChangeSubcategory}
                name={subcategory.value}
                key={index}
              />
            }
            label={subcategory.title}
          />
        </ListItem>
      ))}
    </div>
  );
}
