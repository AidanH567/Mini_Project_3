import dbConnect from "../dbConnect";
export const register = (req, res) => {};

//CHECK EXISTING USER
const q = "SELECT * FROM users WHERE emailId = ? OR username = ?";

dbConnect.query(q, [req.body.emailId, req.body.lastName], (err, data) => {
  if (err) res.json(err);
  if (data.length) return res.status(409).json("User already exists");
});

export const login = (req, res) => {};

export const logout = (req, res) => {};
