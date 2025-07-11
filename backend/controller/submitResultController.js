const Question = require("../models/questions");
const Result = require("../models/result");

const submitResult = async (req, res) => {
  try {
    const { answers } = req.body;

    let totalPoints = {
      jiuJitsu: 0,
      capoeira: 0,
      muayThai: 0,
    };

    const formattedAnswers = [];

    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);
      if (!question) continue;

      const selectedOption = question.options[answer.selectedOptionIndex];
      if (!selectedOption) continue;

      // Soma dos pontos
      totalPoints.jiuJitsu += selectedOption.points.jiuJitsu;
      totalPoints.capoeira += selectedOption.points.capoeira;
      totalPoints.muayThai += selectedOption.points.muayThai;

      formattedAnswers.push({
        questionId: question._id,
        selectedOptionIndex: answer.selectedOptionIndex,
        points: selectedOption.points,
      });
    }

    const sum =
      totalPoints.jiuJitsu + totalPoints.capoeira + totalPoints.muayThai;

    const percentages = {
      jiuJitsu: Math.round((totalPoints.jiuJitsu / sum) * 100),
      capoeira: Math.round((totalPoints.capoeira / sum) * 100),
      muayThai: Math.round((totalPoints.muayThai / sum) * 100),
    };

    // determina o estilo dominante
    const maxStyle = Object.keys(totalPoints).reduce((a, b) =>
      totalPoints[a] > totalPoints[b] ? a : b
    );
    
    // salva no banco
    const result = new Result({
      answers: formattedAnswers,
      totalPoints,
      percentages,
      resultStyle: maxStyle,
    });

    await result.save();

    res.status(201).json({
      message: "Resultado salvo com sucesso!",
      resultStyle: maxStyle,
      totalPoints,
      percentages,
    });
  } catch (error) {
    console.error("Erro ao salvar resultado:", error);
    res.status(500).json({ error: "Erro ao calcular e salvar resultado" });
  }
};

module.exports = { submitResult };
