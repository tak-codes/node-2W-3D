const mongoose = require("mongoose");

const { Schema } = mongoose;
const writeSchema = new Schema({
  nickname: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    required: true,
  },
  write: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Write", writeSchema);
