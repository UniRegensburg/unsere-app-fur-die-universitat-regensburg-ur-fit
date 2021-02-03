const events = {
  auth: {
    onUserSignInSuccess: "onUserSignInSuccess",
    onUserSignInWrongCredentials: "onUserSignInFailure",
    onUserSignInError: "onUserSignInError",
    onUserSignOutSuccess: "onUserSignOutSuccess",
    onUserSignOutError: "onUserSignOutError",
    onUserStateChanged: "onUserStateChanged",
  },
};

export default events;
