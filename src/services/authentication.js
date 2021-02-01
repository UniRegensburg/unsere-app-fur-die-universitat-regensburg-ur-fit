import firebase from "firebase";
import { Event, Observable } from "../utils/observable";
import config from "../constants/authentication.config";
import events from "../constants/events";

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
  return await response.json();
}

function authenticateWithFirebase(token) {
  firebase
    .auth()
    .signInWithCustomToken(token)
    .then((userCredential) => {
      this.notifyAll(
        new Event(events.auth.onUserSignInSuccess, userCredential.user)
      );
    })
    .catch((error) => {
      // error.code
      // error.message
      this.notifyAll(new Event(events.auth.onUserSignInError));
    });
}

function authenticate(username, password) {
  requestAuthToken(username, password).then((res) => {
    if (res.error) {
      this.notifyAll(new Event(events.auth.onUserSignInError));
    } else {
      if (!res.token) {
        this.notifyAll(new Event(events.auth.onUserSignInWrongCredentials));
      } else {
        authenticateWithFirebase.call(this, res.token);
      }
    }
  });
}

class Authentication extends Observable {
  constructor() {
    super();
    this.setAuthenticationStateListener();
  }

  setAuthenticationStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.notifyAll(new Event(events.auth.onUserSignedIn, user));
      } else {
        this.notifyAll(new Event(events.auth.onUserSignedOut));
      }
    });
  }

  login(username, password) {
    if (username && password) {
      authenticate.call(this, username, password);
    }
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.notifyAll(new Event(events.auth.onUserSignOutSuccess));
      })
      .catch((error) => {
        this.notifyAll(new Event(events.auth.onUserSignOutError));
      });
  }

  isAuthenticated() {
    return firebase.auth().currentUser ? true : false;
  }
}

export default new Authentication();
