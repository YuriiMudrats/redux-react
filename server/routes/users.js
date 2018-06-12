import express from "express";
let router = express.Router();
import validateInput from "../shared/validations/signup";
import Users from "../index";
import bcrypt from "bcrypt";
import saltRounds from "../config";
import validLogIn from "../shared/validations/login";
import jwt from "jsonwebtoken";
import hashToken from "../shared/jwt";
router.post("/", async (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    const { username, password, email } = req.body;
    const hash = await bcrypt.hash(password, 10);
    let user = new Users({
      username: username,
      email: email,
      hashedPassword: hash
    });
    user.save();
    const token = hashToken(email);
    const userInfo = Users.find(error);
    res.json({ isSign: true, isAuth: true, jwToken: token });
  } else {
    res.status(401).json({ errors });
  }
});

export default router;
