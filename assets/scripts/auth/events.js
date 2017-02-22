'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');

const ui = require('./ui');

const store = require('../store');

const onSignUp = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(ui.success)

    .catch(ui.failure);
};

const onSignIn = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(ui.signInSuccess)
    .then(ui.success)

    .catch(ui.signInError);

};

const onChangePassword = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then(ui.success)

    .catch(ui.changePasswordError);
};

const onSignOut = function(event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .then(ui.success)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('.changebtn').hide();
  $('#sign-out').hide();
  $('#getListButton').hide();
  $('#add-button').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#signin').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
  $('#warning').hide();
  $('#created').hide();
  $('#edited').hide();
  $('#clearListButton').hide();
};

module.exports = {
  addHandlers,
};
