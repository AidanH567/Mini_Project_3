const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/comments
router.get("/", (req, res) => {
  Controllers.commentsController.getComments(res);
});

// matches POST requests sent to /api/comments/create
router.post("/create", (req, res) => {
  Controllers.commentsController.createComment(req.body, res);
});

// matches PUT requests to /api/comments/123 (123 in id param)
router.put("/:id", (req, res) => {
  Controllers.commentsController.updateComment(req, res);
});

// matches DELETE requests sent to /api/comments/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.commentsController.deleteComment(req, res);
});

module.exports = router;
