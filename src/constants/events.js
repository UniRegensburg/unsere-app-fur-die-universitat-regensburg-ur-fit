const events = {
  auth: {
    onUserSignInSuccess: "onUserSignInSuccess",
    onUserSignInWrongCredentials: "onUserSignInFailure",
    onUserSignInError: "onUserSignInError",
    onUserSignOutSuccess: "onUserSignOutSuccess",
    onUserSignOutError: "onUserSignOutError",
    onUserSignedIn: "onUserSignedIn",
    onUserSignedOut: "onUserSignedOut",
    onUserStateChanged: "onUserStateChanged",
  },
};

export default events;
