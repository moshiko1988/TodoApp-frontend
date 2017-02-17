'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.list) {
    console.log(data.list);
  } else {
    console.table(data.lists);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');
};
const onPatchSuccess = function () {
  console.log('Book was successfully patched.');
};
const onCreateSuccess = function () {
  console.log('list was successfully created.');
};
module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onCreateSuccess
};
