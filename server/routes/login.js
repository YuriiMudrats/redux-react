import express from "express";
let router = express.Router();
import validLogIn from "../shared/validations/login";
import Users from "../index";
import bcrypt from "bcrypt";
import saltRounds from "../config";
import hashToken from "../shared/jwt";

router.post("/log", (req, res) => {
  let { errors, isValid } = validLogIn(req.body);
  console.log(req.body);
  console.log(isValid);
  if (isValid) {
    const { email, password } = req.body;

    Users.find({ email: email }, (err, users) => {
      if (err) res.json({ isLogin: true, isAuth: false });
      if (users.length >= 1) {
        console.log(users);
        let auth = bcrypt.compare(
          password,
          users[0].hashedPassword,
          (err, res)
        );
        if (err) console.log(err);
        if (res) {
          const { email, username, _id } = users[0];
          const token = hashToken(email);

          res.json({
            isLogin: true,
            isAuth: true,
            jwToken: token,
            userInfo: { _id, username, email }
          });
        } else {
          res.json({ isLogin: true, isAuth: false });
        }
      } else {
        res.status(401).json({ isLogin: true, isAuth: false, isReg: true });
      }
    });
  } else {
    res.status(401).json({ errors });
  }
});

export default router;
