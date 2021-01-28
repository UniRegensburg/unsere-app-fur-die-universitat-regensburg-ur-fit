class Authentication {
  constructor() {
    this.authenticated = true;
  }

  //needs to be reimplemented, when user authentification is possible
  login(username, password) {
    if (username && password) {
      this.authenticated = true;
    }
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Authentication();
