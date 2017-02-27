'use strict';


const showListTemplate = require('../templates/listing.handlebars');
const store = require('../store.js');

const getListSuccess = (data) => {
  // console.log(data);
  let showListHtml = showListTemplate({
    lists: data.lists
  });
  $('.content').empty().append(showListHtml);
  // console.table(data.lists);
  // console.log(store.lists.length);
  if(parseInt(store.lists.length) === 0){
    $('#edited2').text("empty list");
    $('#edited2').fadeIn(1000).delay(1000).fadeOut(300);
    // $('#edited2').fadeOut(300);
  }else {
    console.log(store.lists);
  }
  // event.onGetList();
};


const onDeleteSuccess = function() {
  // console.log('list was successfully deleted.');
  $('#edited').text("list was successfully deleted.");
  $('#edited').fadeIn(1000).delay(1000).fadeOut(300);
  // $('#edited').fadeOut(600);
};
const onPatchSuccess = function() {
  // console.log('List was successfully patched.');
  $('#created').text("list was successfully edited.");
  $('#created').fadeIn(1000).delay(1000).fadeOut(300);
  // $('#created').fadeOut(600);
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
