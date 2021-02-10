import firebase from "./firebase-init";
import config from "../../constants/authentication.config";

// requesting JWT Token from authentication server, this request needs strict http rules
// for more information on fetch request options, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
async function requestAuthToken(username, password) {
  const response = await fetch(config.authUrl, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
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
    const userCredentials = await firebase.auth().signInWithCustomToken(token);
    if (userCredentials) {
      // sign in successfull
      return userCredentials.user.uid;
    } else {
      throw new Error("ERROR: unknown firebase server error");
    }
  } catch (error) {
    throw new Error(error);
  }
}

class Authentication {
  onAuthStateChanged(callback) {
    return firebase.auth().onAuthStateChanged((user) => {
      callback(user ? { uid: user.uid } : null);
    });
  }

  async login(username, password) {
    try {
      return await authenticate(username, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      throw new Error(error);
    }
  }

  get currentUser() {
    return firebase.auth().currentUser
      ? { uid: firebase.auth().currentUser.uid }
      : null;
  }

  get isAuthenticated() {
    return firebase.auth().currentUser !== null;
  }
}

export default new Authentication();
