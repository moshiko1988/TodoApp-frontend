'use strict';




const signUpSuccess = () => {
  // if (data) { console.log(data); }
  $('#sign-up-btb').hide();
  $('#created').text("Sign up successfully. Please Sign in");
  $('#created').slideDown();
  $('#created').delay(2000).fadeOut();
};
const signInSuccess = () => {
  // if (data) { console.log(data); }
  $('#sign-up-btb').hide();
  $('.signinhide').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('.changebtn').show();
  $('#getListButton').show();
  $('#add-button').show();
  $('#created').text("Sign in successfully.");
  $('#created').slideDown();
  $('#created').delay(2000).fadeOut();
  $('#clearListButton').show();

};
const signOutSuccess = () => {
  // if (data) { console.log(data); }
  $('#sign-out').hide();
  $('.signinhide').show();
  $('#sign-up-btb').show();
  $('.changebtn').hide();
  $('.content').empty();
  $('#signin > fieldset > label > input').val('');
  $('#sign-up > fieldset > label > input').val('');
  $('#getListButton').hide();
  $('#add-button').hide();
  $('#show').hide();
  $('#clearListButton').hide();


};
const changePasswordSuccess = () => {
  // if (data) { console.log(data); }
  $('#created').text("Password has successfully changed.");
  $('#created').slideDown();
  $('#created').delay(2000).fadeOut();
  $('#change-password > fieldset > label > input').val('');

};
const signInError = () => {
  // console.error(error);

  $('#warning').text("Invalid email or password. Please try again.");
  $('#warning').slideDown();

  $('#warning').delay(2000).slideUp();

};
const changePasswordError = () => {
  // console.error(error);
  $('#change-password > fieldset > label > input').val('');
  $('#warning').text("Password is not correct. Please try again.");
  $('#warning').slideDown();

  $('#warning').delay(2000).slideUp();

};
const signUpError = () => {
  // console.error(error);
  $('#sign-up > fieldset > label > input').val('');

  $('#warning').text("Invalid email or password. Please try again.");
  $('#warning').slideDown();

  $('#warning').delay(2000).slideUp();

};


module.exports = {
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signInError,
  changePasswordError,
  changePasswordSuccess,
  signUpError
};
