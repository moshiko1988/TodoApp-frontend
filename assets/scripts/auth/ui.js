'use strict';




const signUpSuccess =(data) =>{
if (data) { console.log(data); }
// $('#sign-up > fieldset > label > input').val('');
  $('#sign-up-btb').hide();
};
const signInSuccess = (data) => {
if (data) { console.log(data); }
  $('#sign-up-btb').hide();
  $('.signinhide').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('.changebtn').show();
};
const signOutSuccess = (data) => {
  if (data) { console.log(data); }
  $('#sign-out').hide();
  $('.signinhide').show();
  $('#sign-up-btb').show();
  $('.changebtn').hide();
  $('.content').empty();
  $('#sign-in > fieldset > label > input').val('');
  $('#sign-up > fieldset > label > input').val('');

};



const success = (data) => {
  if (data) { console.log(data); }

};

module.exports = {
  signInSuccess,
  signOutSuccess,
  success,
  signUpSuccess
};
