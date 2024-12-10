"use strict";

const User = require("./user");
const Post = require("./posts");
const Comment = require("./comments");
const Like = require("./likes");

// Define associations between models
Post.belongsTo(User); // Each Post belongs to a single User
User.hasMany(Post); // A User can have many Posts

// Comments associations
Comment.belongsTo(Post, { foreignKey: "postId" }); // Each Comment belongs to a Post
Post.hasMany(Comment, { foreignKey: "postId" }); // A Post can have many Comments

Comment.belongsTo(User, { foreignKey: "userId" }); // Each Comment belongs to a User
User.hasMany(Comment, { foreignKey: "userId" }); // A User can have many Comments

// Likes associations
Like.belongsTo(Post, { foreignKey: "postId" }); // A Like belongs to a Post
Post.hasMany(Like, { foreignKey: "postId" }); // A Post can have many Likes

Like.belongsTo(User, { foreignKey: "userId" }); // A Like belongs to a User
User.hasMany(Like, { foreignKey: "userId" }); // A User can have many Likes

// Sync the models with the database
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

module.exports = {
  User,
  Post,
  Comment,
  Like,
};
