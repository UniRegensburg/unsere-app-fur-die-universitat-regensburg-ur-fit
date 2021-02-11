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
    const { history, location } = this.props;
    // current page was pushed onto the stack (ACTION: "PUSH"), going back is the expected behavior
    if (history.action === "PUSH") {
      history.goBack();
      // current page is either completely unrelated to previous page (Action: "POP") or a replacement (Action: "REPLACE")
      // actively moving to the category screen (without adding to the history stack) is the expected behavior
    } else {
      this.props.history.replace(
        // sclices last path from url: /relaxation/meditation -> /relaxation
        location.pathname.substring(0, location.pathname.lastIndexOf("/"))
      );
    }
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
