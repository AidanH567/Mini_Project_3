"use strict";

const User = require("./user");
const Post = require("./posts");
const Comment = require("./comments");
const Like = require("./likes");

// Define associations between models
Post.belongsTo(User); // Each Post belongs to a single User
User.hasMany(Post); // A User can have many Posts

// Comments associations
Comment.belongsTo(Post); // Each Comment belongs to a Post
Post.hasMany(Comment); // A Post can have many Comments

Comment.belongsTo(User); // Each Comment belongs to a User
User.hasMany(Comment); // A User can have many Comments

// Likes associations
Like.belongsTo(Post); // A Like belongs to a Post
Post.hasMany(Like); // A Post can have many Likes

Like.belongsTo(User); // A Like belongs to a User
User.hasMany(Like); // A User can have many Likes

// Sync the models with the database
async function init() {
  await User.sync({ alter: true });
  await Post.sync({ alter: true });
  await Comment.sync({ alter: true });
  await Like.sync({ alter: true });
}

init();

module.exports = {
  User,
  Post,
  Comment,
  Like,
};
