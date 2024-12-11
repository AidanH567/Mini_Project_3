import dbConnect from "../dbConnect.js";
import bcrypt from "bcryptjs";
export const register = (req, res) => {};

//CHECK EXISTING USER
const q = "SELECT * FROM users WHERE emailId = ? OR username = ?";

dbConnect.query(q, [req.body.emailId, req.body.lastName], (err, data) => {
  if (err) res.json(err);
  if (data.length) return res.status(409).json("User already exists");

  //Hash Password and create a user
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("req.body.password", salt);

  const q = "INSERT INTO users(`username`, `email`,`password`) VALUES (?)";
  const values = [req.body.username, req.body.username, hash];
});

export const login = (req, res) => {};

export const logout = (req, res) => {};
