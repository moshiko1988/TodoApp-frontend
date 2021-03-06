'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');

const getFormFields = require('../../../lib/get-form-fields.js');

const onGetList = (event) => {
  if (event) {
    event.preventDefault();
  }
  api.index()
    .then((response) => {
      store.lists = response.lists;
      return store;
    })
    .then(ui.getListSuccess)
    .catch(ui.failure);
};

const onDeleteList = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .then(onGetList)
    .catch(ui.onError);
};

const onPatchList = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  let data = getFormFields(event.target);
  api.patch(id, data)
    .then(ui.onPatchSuccess)
    .then(onGetList)
    .catch(ui.onError);
};

const onCreateList = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.post(data)
    .then(ui.onCreateSuccess)
    .then(onGetList)
    .then(() => {
      $("#add-button").toggleClass("open");
    })
    .catch(ui.onError);


};


const addHandlers = () => {

  $('#create-list').on('submit', onCreateList);
  $('#getListButton').on('click', onGetList);
  $('.content').on('click', '.remove-list', onDeleteList);
  $('.content').on('submit', '.edit-list', onPatchList);
  $('#clearListButton').on('click', function() {
    $('.content').empty();
  });



};

module.exports = {
  addHandlers
};
