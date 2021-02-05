import React from "react";
import { withStyles } from "@material-ui/core/";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TopAppBar from "../pageComponents/TopAppBar";
import ContentCard from "../pageComponents/ContentCard";
import BottomNavigationBar from "../pageComponents/BottomNavigationBar";

// obviously this data has to be replaced by real data according to the subcategory
import * as TestContent from "../../constants/testContent.js";

const styles = (theme) => ({
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
});

class Contentlistscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: "Länge" };
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleSortChange(event) {
    this.setState({
      sort: event.target.value,
    });
    // todo: sort content accordingly
  }

  handleBackButtonClick() {
    this.props.history.goBack();
  }

  render() {
    let testdata = TestContent.data;
    const { classes, title } = this.props;

    return (
      <div className="Contentlistscreen">
        <TopAppBar data-testid="appbar" title={title} />
        <div className={classes.container}>
          <div className={classes.header}>
            <ArrowBackIcon
              className={classes.back}
              onClick={this.handleBackButtonClick}
            />
            <FormControl className={classes.select}>
              <Select
                native
                value={this.state.sort}
                onChange={this.handleSortChange}
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

          <ContentCard data-testid="content-item" data={testdata.test1} />
          <ContentCard data-testid="content-item" data={testdata.test2} />
          <ContentCard data-testid="content-item" data={testdata.test3} />
          <ContentCard data-testid="content-item" data={testdata.test4} />
        </div>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default withStyles(styles)(Contentlistscreen);
