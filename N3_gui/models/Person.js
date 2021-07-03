const mongoose = require("mongoose");

const Person = new mongoose.Schema(
  {
    age: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    cp: {
      type: String,
      required: true,
    },
    chol: {
      type: String,
      required: true,
    },
  },
  { collection: "heart" }
);

module.exports = mongoose.model("Person", Person);
