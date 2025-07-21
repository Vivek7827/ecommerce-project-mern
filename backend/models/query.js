const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const querySchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Message: {
      type: String,
      required: true,
    },
    queryStatus: {
      type: String,
      default: "Unread"
    },

  },{ timestamps: true }
);

module.exports = model("Query", querySchema);