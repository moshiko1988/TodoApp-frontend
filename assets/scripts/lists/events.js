'use strict';
// const index = require('../index');
const api = require('./api.js');
const ui = require('./ui.js');
// attach getFormFields globally

const getFormFields = require('../../../lib/get-form-fields.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
// const onGetList = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//
//   if (data.list.id.length === 0){
//       api.index()
//         .then(ui.getListSuccess)
//         .catch(ui.onError);
//   } else {
//     api.show(data.list.id)
//       .then(ui.getListSuccess)
//       .catch(ui.onError);
//   }
//
// };
const onGetList = (event) => {
  event.preventDefault();
  api.index()
    .then(ui.getListSuccess)
    .catch(ui.failure);
};

const onDeleteList = function(event){
  event.preventDefault();
let id = event.target.dataset.id;
  // let data = getFormFields(event.target);
  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};
const onPatchList = function(event){
  event.preventDefault();
  console.log(event.target);
let id = event.target.dataset.id;
  let data = getFormFields(event.target);
  api.patch(id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};
const onCreateList = function(event){
  event.preventDefault();


  let data = getFormFields(event.target);
  api.post(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError);
};


const addHandlers = () => {
  $('#book-search').on('submit', onGetList);
  // $('#edit-book').on('submit', onPatcheList);
  $('#create-book').on('submit', onCreateList);
  $('#getListButton').on('click', onGetList);
  // $('.remove-list').on('click', onDeleteList);
  $('.content').on('click', '.remove-list', onDeleteList);
  $('.content').on('submit', '.edit-book', onPatchList);
};

module.exports = {
  addHandlers
};
