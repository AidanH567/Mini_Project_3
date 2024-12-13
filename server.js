const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
const Controllers = require("./controllers");

// parse requests of content-type - application/json
app.use(express.json());

// Import the routes
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

let postsRoutes = require("./routes/postsRoutes.js");
app.use("/api/posts", postsRoutes);

// Add routes for likes and comments
let likesRoutes = require("./routes/likesRoutes.js");
app.use("/api/likes", likesRoutes);

let commentsRoutes = require("./routes/commentsRoutes.js");
app.use("/api/comments", commentsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Blogging API application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Controllers.initController.storeInfo();
