import app from "../services/firebase-config";
import { Event, Observable } from "../utils/observable";
import config from "../../constants/authentication.config";
import events from "../../constants/events";

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

async function authenticate(username, password) {
  try {
    const res = await requestAuthToken(username, password);

    if (res.token) {
      try {
        await app.auth().signInWithCustomToken(res.token);
        this.notifyAll(new Event(events.auth.onUserSignInSuccess))
      } catch (error) {
        this.notifyAll(new Event(events.auth.onUserSignInError));
      }
    } else {
      this.notifyAll(new Event(events.auth.onUserSignInWrongCredentials))
    }
  } catch {
    this.notifyAll(new Event(events.auth.onUserSignInError));
  }
}

class Authentication extends Observable {
  constructor() {
    super();
    app.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.notifyAll(new Event(events.auth.onUserSignedIn, user.uid));
        this.notifyAll(new Event(events.auth.onUserStateChanged, user.uid));
      } else {
        this.notifyAll(new Event(events.auth.onUserSignedOut));
        this.notifyAll(new Event(events.auth.onUserStateChanged, null));
      }
    });
  }

  login(username, password) {
    if (username && password) {
      authenticate.call(this, username, password);
    }
  }

  logout() {
    app
      .auth()
      .signOut()
      .then(() => {
        this.notifyAll(new Event(events.auth.onUserSignOutSuccess));
      })
      .catch((error) => {
        this.notifyAll(new Event(events.auth.onUserSignOutError));
      });
  }

  get currentUser() {
    return app.auth().currentUser !== null ? app.auth().currentUser.uid : null;
  }

  get isAuthenticated() {
    return app.auth().currentUser !== null;
  }
}

export default new Authentication();
