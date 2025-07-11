const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  selectedOption: { type: Object, required: true },
  answeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Response", responseSchema);
