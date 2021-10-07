const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema({
  nickname: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
  },
});
module.exports = mongoose.model("Comment", commentSchema);
