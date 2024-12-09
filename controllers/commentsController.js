"use strict";
const Models = require("../models");

// Finds all Comments in DB, then sends array as response
const getComments = (res) => {
  Models.Comment.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Uses JSON from request body to create new Comment in DB
const createComment = (data, res) => {
  Models.Comment.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Uses JSON from request body to update Comment ID from params
const updateComment = (req, res) => {
  Models.Comment.update(req.body, {
    where: { commentId: req.params.id },
    // returning: true, // Uncomment if you want to return updated data
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Deletes Comment matching ID from params
const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { commentId: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
