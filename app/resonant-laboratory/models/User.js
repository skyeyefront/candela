import UserPreferences from './UserPreferences';
let girder = window.girder;

let User = girder.models.UserModel.extend({
  initialize: function () {
    this.loggedIn = false;
    this.preferences = new UserPreferences();
    this.listenTo(this, 'rl:logout', this.handleUpdate);
    this.listenTo(this, 'rl:login', this.handleUpdate);
    this.authenticate();
  },
  addListeners: function () {
    this.preferences.addListeners();
  },
  authenticate: function (login) {
    login = login !== false;

    return new Promise((resolve, reject) => {
      girder.restRequest({
        path: 'user/authentication',
        type: login ? 'GET' : 'DELETE',
        error: reject
      }).done(resolve).error(reject);
    }).then(resp => {
      if (resp === null || login === false) {
        this.finishLogout();
      } else {
        this.loggedIn = true;
        this.clear({
          silent: true
        }).set(resp.user);
        this.authToken = resp.authToken;
        this.trigger('rl:login');
        girder.events.trigger('g:login');
      }
    }).catch(errorObj => {
      if (errorObj.statusText === 'Unauthorized') {
        // We don't yet have the appropriate
        // HTTP headers... so keep us logged out
        this.finishLogout();
      } else {
        // Something else happened
        window.mainPage.trigger('rl:error', errorObj);
      }
    });
  },
  finishLogout: function () {
    let wasLoggedIn = this.loggedIn;
    this.loggedIn = false;
    this.clear({
      silent: true
    }).set({});
    this.authToken = undefined;
    if (wasLoggedIn) {
      this.preferences.resetToDefaults();
      window.mainPage.switchProject(null)
        .then(() => {
          this.trigger('rl:logout');
          // Girder uses g:login for both log in and log out
          girder.events.trigger('g:login');
        });
    }
  },
  handleUpdate: function () {
    if (this.loggedIn === false) {
      // Not logged in; clear all the preferences
      this.preferences.resetToDefaults();
    } else {
      // We're logged in! First, let's see if
      // the user already has preferences stored
      this.preferences.fetch()
        .catch((errorObj) => {
          window.mainPage.trigger('rl:error', errorObj);
        });
    }
  },
  isLoggedIn: function () {
    return this.loggedIn;
  }
});

export default User;