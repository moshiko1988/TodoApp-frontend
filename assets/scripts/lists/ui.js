'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data) {
    console.log(data);
  } else {
    console.table(data.lists);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('2 was successfully deleted.');
};
const onPatchSuccess = function () {
  console.log('1 was successfully patched.');
};
const onCreateSuccess = function (data) {
  console.log(data);
  console.log('list was successfully created.');
};
module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onCreateSuccess
};
