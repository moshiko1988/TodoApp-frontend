'use strict';




const signUpSuccess =(data) =>{
if (data) { console.log(data); }
// $('#sign-up > fieldset > label > input').val('');
  $('#sign-up-btb').hide();
  $('#created').text("Sign up successfully. Please Sign in");
  $('#created').slideDown();
  $('#created').delay(2000).fadeOut();
};
const signInSuccess = (data) => {
if (data) { console.log(data); }
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
};
const signOutSuccess = (data) => {
  if (data) { console.log(data); }
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

};
const changePasswordSuccess = (data) => {
  if (data) { console.log(data); }

$('#change-password > fieldset > label > input').val('');

};
const signInError = (error) => {
  console.error(error);

    $('#warning').text("Invalid email or password. Please try again.");
    $('#warning').slideDown();

    $('#warning').delay(2000).slideUp();

};
const changePasswordError = (error) => {
  console.error(error);
  $('#change-password > fieldset > label > input').val('');
    $('#warning').text("Password is not correct. Please try again.");
    $('#warning').slideDown();

    $('#warning').delay(2000).slideUp();

};
const signUpError = (error) => {
  console.error(error);
  $('#sign-up > fieldset > label > input').val('');

    $('#warning').text("Invalid email or password. Please try again.");
    $('#warning').slideDown();

    $('#warning').delay(2000).slideUp();

};

const success = (data) => {
  if (data) { console.log(data); }

};

module.exports = {
  signInSuccess,
  signOutSuccess,
  success,
  signUpSuccess,
  signInError,
  changePasswordError,
  changePasswordSuccess,
  signUpError
};
