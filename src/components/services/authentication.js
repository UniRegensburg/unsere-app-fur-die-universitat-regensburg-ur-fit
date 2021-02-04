import app from "../services/firebase-config";
import { Event, Observable } from "../utils/observable";
import config from "../../constants/authentication.config";
import events from "../../constants/events";

// requesting JWT Token from authentication server, this request needs strict http rules
async function requestAuthToken(username, password) {
  const response = await fetch(config.authUrl, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      user: username,
      pass: password,
    }),
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}

// error messages are not propagates outside for security reasons
async function authenticate(username, password) {
  if (!username) {
    throw new Error("ERROR: no username specified");
  }
  if (!password) {
    throw new Error("ERROR: no password specified");
  }

  // request sign in token from authentication server
  try {
    const res = await requestAuthToken(username, password);
    if (res.token) {
      var token = res.token;
    } else {
      // auth server was unable to sign in the user
      return null;
    }
  } catch (error) {
    throw new Error(error);
  }

  // use JWT Token to authenticate with firebase authentication
  // this should always work if the auth server did not throw any errors
  try {
    const userCredentials = await app.auth().signInWithCustomToken(token);
    if (userCredentials) {
      // sign in successfull
      return userCredentials.user;
    } else {
      throw new Error("ERROR: unknown firebase server error");
    }
  } catch (error) {
    throw new Error(error);
  }
}

class Authentication extends Observable {
  constructor() {
    super();
    app.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.notifyAll(new Event(events.auth.onUserStateChanged, user));
      } else {
        this.notifyAll(new Event(events.auth.onUserStateChanged, null));
      }
    });
  }

  async login(username, password) {
    try {
      const user = authenticate(username, password);
      if (user !== null) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout() {
    try {
      const res = await app.auth().signOut();
      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  }

  get currentUser() {
    return app.auth().currentUser;
  }

  get isAuthenticated() {
    return app.auth().currentUser !== null;
  }
}

export default new Authentication();
