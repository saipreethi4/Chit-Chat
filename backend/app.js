const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = new express();

const loginRouter = require("./src/routes/login-Router");
const signUpRouter = require("./src/routes/signUp-Router");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", loginRouter);
app.use("/api/signup", signUpRouter);

app.get("/", (req, res) => {
  console.log("app.js get reqst running");
  res.send("hello from home page");
});

app.listen(PORT, () => {
  console.log(`app listening to PORT : ${PORT}`);
});
