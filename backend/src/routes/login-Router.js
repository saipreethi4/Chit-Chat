const express = require("express");
const userData = require("../model/user-model");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  console.log(req.body);
  userData
    .find({
      $and: [{ userName: req.body.userName }, { password: req.body.password }],
    })
    .then((data) => {
      if (data.length !== 0) {
        res.status(200).send();
      }
    })
    .catch((err) => console.log(err));
});

module.exports = loginRouter;
