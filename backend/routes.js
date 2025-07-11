const express = require("express");
const router = express.Router();
const Question = require("./models/questions");
const { submitResult } = require("./controller/submitResultController");

// GET - retorna todas as perguntas
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    res.status(500).json({ error: "Erro ao buscar perguntas!" });
  }
});

// POST - salva as respostas e calcula o resultado
router.post("/answer", submitResult);

module.exports = router;

