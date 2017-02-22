'use strict';


const showListTemplate = require('../templates/listing.handlebars');

const getListSuccess = (data) => {
  // console.log(data);
  let showListHtml = showListTemplate({
    lists: data.lists
  });
  $('.content').empty().append(showListHtml);
  // console.table(data.lists);
};


const onDeleteSuccess = function() {
  // console.log('list was successfully deleted.');
  $('#edited').text("list was successfully deleted.");
  $('#edited').fadeIn(900);
  $('#edited').fadeOut(600);
};
const onPatchSuccess = function() {
  // console.log('List was successfully patched.');
  $('#created').text("list was successfully edited.");
  $('#created').fadeIn(900);
  $('#created').fadeOut(600);
};
const onCreateSuccess = function() {
  // console.log(data);
  // console.log('list was successfully created.');
  $('#create-list > div > input').val('');
};




module.exports = {
  // onSuccess,
  onDeleteSuccess,
  onPatchSuccess,
  onCreateSuccess,
  getListSuccess
};
