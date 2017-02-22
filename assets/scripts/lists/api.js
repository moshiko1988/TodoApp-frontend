'use strict';
const store = require('../store.js');
const config = require('../config.js');

const index = function() {
  return $.ajax({
    url: config.apiOrigin + '/lists',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const show = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const destroy = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};
const patch = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};
const post = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/lists/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

module.exports = {
  index,
  show,
  destroy,
  patch,
  post,
};
