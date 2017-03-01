'use strict';


const showListTemplate = require('../templates/listing.handlebars');
const store = require('../store.js');

const getListSuccess = (data) => {
  let showListHtml = showListTemplate({
    lists: data.lists
  });
  $('.content').empty().append(showListHtml);

  if (store.lists.length === 0) {
    $('#edited2').text("empty list");
    $('#edited2').fadeIn(1000).delay(1500).fadeOut(300);
  }
};

const onPatchSuccess = function() {
  $('#created').text("list was successfully edited.");
  $('#created').fadeIn(1000).delay(1500).fadeOut(300);
};

const onCreateSuccess = function() {
  $('#create-list > div > input').val('');
};

module.exports = {
  onPatchSuccess,
  onCreateSuccess,
  getListSuccess
};
