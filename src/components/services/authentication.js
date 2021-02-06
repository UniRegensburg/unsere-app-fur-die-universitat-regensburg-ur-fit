import app from "../services/firebase-config";
import config from "../../constants/authentication.config";

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
    return app.auth().onAuthStateChanged((user) => {
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
      await app.auth().signOut();
    } catch (error) {
      throw new Error(error);
    }
  }

  get currentUser() {
    return app.auth().currentUser ? { uid: app.auth().currentUser.uid } : null;
  }

  get isAuthenticated() {
    return app.auth().currentUser !== null;
  }
}

export default new Authentication();
