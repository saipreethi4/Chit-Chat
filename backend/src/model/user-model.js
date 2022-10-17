const mongoose = require("mongoose");

const uri = "mongodb+srv://sai:123sai@cluster0.sgxsppc.mongodb.net/CHIT_CHAT";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected: user"))
  .catch((Error) => console.log(Error));

const Schema = mongoose.Schema;

var newUserSchema = new Schema({
  userName: { type: String, unique: true },
  email: String,
  password: String,
  phoneNum: Number,
});

var userData = new mongoose.model("newUserData", newUserSchema);

module.exports = userData;
