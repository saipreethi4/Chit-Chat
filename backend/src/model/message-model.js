const mongoose = require("mongoose");

const uri = "mongodb+srv://sai:123sai@cluster0.sgxsppc.mongodb.net/CHIT_CHAT";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected: user"))
  .catch((Error) => console.log(Error));

const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "newUserData" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true }
);

const message = mongoose.model("Message", messageModel);
module.exports = message;
