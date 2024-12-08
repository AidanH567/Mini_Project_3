"use strict";

const User = require("./user"); // Require the User model
const Post = require("./posts"); // Require the Post model (updated to match the filename)

// Define the associations
Post.belongsTo(User); // Each Post belongs to a single User
User.hasMany(Post); // A User can have many Posts

async function init() {
  // Sync the models with the database
  await User.sync();
  await Post.sync();
}

init();

module.exports = {
  User, // Export the User model
  Post, // Export the Post model
};
