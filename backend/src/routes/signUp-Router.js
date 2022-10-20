const express = require("express");
const signUpRouter = express.Router();
const userData = require("../model/user-model");

signUpRouter.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  var newUser = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    phoneNum: req.body.phoneNum,
  };
  const user = new userData(newUser);
  user
    .save()
    .then((data) => {
      if (data.length !== 0 && data.code != 11000) {
        res.status(200).send(user);
        return { success: true, message: "Successfully added new user" };
      }
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.status(401).send();
        return { success: false, message: "User Name already used" };
      }
    });
});
module.exports = signUpRouter;
// if (data.code == 11000) {
//   console.log("Failed to add new User Name", data.code);
//   res.status(401).send({ message: "User Name already used" });
// } else res.status(200).send(user);
// });
