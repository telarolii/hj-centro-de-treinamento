const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      text: String,
      points: {
        jiuJitsu: { type: Number, default: 0 },
        capoeira: { type: Number, default: 0 },
        muayThai: { type: Number, default: 0 },
      },
    },
  ],
});

module.exports = mongoose.model("Question", questionsSchema);


