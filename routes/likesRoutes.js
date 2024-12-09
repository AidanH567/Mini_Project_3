const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

// matches POST requests sent to /api/likes/create
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

// matches DELETE requests sent to /api/likes/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
