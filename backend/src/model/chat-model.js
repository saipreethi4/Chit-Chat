const mongoose = require("mongoose");
const uri = "mongodb+srv://sai:123sai@cluster0.sgxsppc.mongodb.net/CHIT_CHAT";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected: chat-model"))
  .catch((Error) => console.log(Error));

const chatModel = mongoose.Schema(
  {
    chatName: String,
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newUserData",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "newUserData" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
