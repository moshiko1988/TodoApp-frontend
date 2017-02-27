'use strict';




const signUpSuccess = () => {
  // if (data) { console.log(data); }
  $('#sign-up-btb').hide();
  $('#created').text("Sign up successfully. Please Sign in");
  $('#created').slideDown();
  $('#created').fadeIn(1000).delay(1000).fadeOut(300);
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
  $('#created').fadeIn(1000).delay(1000).fadeOut(300);
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
  $('#change-password > fieldset > label > input').val('');
  $('#create-list > div > input').val('');

  $('#getListButton').hide();
  $('#add-button').hide();
  $('#show').hide();
  $('#clearListButton').hide();


};
const changePasswordSuccess = () => {
  // if (data) { console.log(data); }
  $('#created').text("Password has successfully changed.");
  $('#created').slideDown();
  $('#created').fadeIn(1000).delay(1000).fadeOut(300);
  $('#change-password > fieldset > label > input').val('');

};
const signInError = () => {
  // console.error(error);

  $('#warning').text("Invalid email or password. Please try again.");
  $('#warning').slideDown();

  $('#warning').fadeIn(1000).delay(1000).fadeOut(300);

};
const changePasswordError = () => {
  // console.error(error);
  $('#change-password > fieldset > label > input').val('');
  $('#warning').text("Password is not correct. Please try again.");
  $('#warning').slideDown();

  $('#warning').fadeIn(1000).delay(1000).fadeOut(300);

};
const signUpError = () => {
  // console.error(error);
  // $('#sign-up > fieldset > label > input').val('');

  $('#warning').text("Invalid email or password. Please try again.");
  $('#warning').slideDown();

  $('#warning').fadeIn(1000).delay(1000).fadeOut(300);

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
