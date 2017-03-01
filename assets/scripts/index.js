'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
$(() => {
  setAPIOrigin(location, config);
});

require('./example');
const authEvents = require('./auth/events.js');
const lists = require('./lists/events.js');
$(() => {
  authEvents.addHandlers();
  lists.addHandlers();


  let password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;



});
