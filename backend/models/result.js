const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      selectedOptionIndex: Number,
      points: {
        jiuJitsu: Number,
        capoeira: Number,
        muayThai: Number,
      },
    },
  ],
  totalPoints: {
    jiuJitsu: Number,
    capoeira: Number,
    muayThai: Number,
  },
  percentages: {
    jiuJitsu: Number,
    capoeira: Number,
    muayThai: Number,
  },
  resultStyle: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", resultSchema);
