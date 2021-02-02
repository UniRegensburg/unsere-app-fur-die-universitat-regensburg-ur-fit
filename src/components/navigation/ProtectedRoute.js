import React from "react";
import { Route, Redirect } from "react-router-dom";
import events from "../../constants/events";
import auth from "../services/authentication";

class ProtectedRoute extends React.Component {
  state = {
    isAuthenticated: true,
  }
  componentDidMount(){
    auth.addEventListener(events.auth.onUserStateChanged, () => {
      this.setState({isAuthenticated: auth.isAuthenticated});
    })
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
        <Route {...rest} render={props => (
          <div>
            {!this.state.isAuthenticated && <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />}
            <Component {...this.props} />
          </div>
          )}
        />
      )
    }
  }

export default ProtectedRoute;