const express = require("express");
const userData = require("../model/user-model");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  console.log(req.body);
  userData.findOne({ userName: req.body.userName }).then((user) => {
    if (!user) {
      res.status(401).send({ message: "Invalid Username" });
    } else {
      let userName = req.body.userName;
      let password = req.body.password;

      if (password !== user.password) {
        res.status(401).send({ message: "Invalid Password" });
      } else {
        // let payload = { subject: userName + password };
        // let token = jwt.sign(payload, "secretKey");
        res.status(200).send();
      }
    }
  });
});

module.exports = loginRouter;

// loginRouter.post("/", (req, res) => {
//   console.log(req.body);
//   userData
//     .find({
//       $and: [{ userName: req.body.userName }, { password: req.body.password }],
//     })
//     .then((data) => {
//       if (data.length !== 0) {
//         res.status(200).send();
//       }
//     })
//     .catch((err) => console.log(err));
// });
