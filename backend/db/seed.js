const mongoose = require("mongoose");
require("dotenv").config();
const Question = require("../models/questions");

mongoose.set("strictQuery", true);

async function seedDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.xr9bvjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    const questions = [
      {
        question:
          "Qual abordagem você valoriza mais em uma atividade desafiadora?",
        options: [
          {
            text: "Analisar cada movimento com calma antes de agir",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Adaptar-se ao ritmo do ambiente de forma fluida e criativa",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Agir com intensidade e rapidez para resolver o desafio",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Quando enfrenta uma situação competitiva, você prefere:",
        options: [
          {
            text: "Encontrar a melhor maneira de controlar o andamento",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Usar a improvisação para surpreender os outros",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Apostar na força",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question:
          "Sobre seu estilo pessoal de expressão, você se identifica mais com:",
        options: [
          {
            text: "Precisão e técnica refinada",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Movimento espontâneo e ritmo contagiante",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Energia vibrante e explosiva",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Em um treino ideal, você gostaria que fosse:",
        options: [
          {
            text: "Detalhado e focado em aperfeiçoar habilidades específicas",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Alegre, com música e muita liberdade para inventar",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Intenso, focado em resistência e potência física",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question:
          "Qual dessas palavras melhor descreve sua maneira de agir sob pressão?",
        options: [
          {
            text: "Calma",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Flexibilidade",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Determinação",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Você prefere enfrentar desafios em que:",
        options: [
          {
            text: "O controle da situação é fundamental",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "A criatividade para mudar de estratégia é necessária",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "A força e rapidez definem o resultado",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Qual ritmo você acha mais inspirador para seu desempenho?",
        options: [
          {
            text: "Tranquilo e calculado",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Dinâmico e cheio de variações",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Acelerado e intenso",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Em grupos ou times, qual papel costuma assumir?",
        options: [
          {
            text: "O estrategista, que planeja os próximos passos",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "O improvisador, que cria soluções inesperadas",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "O executor, que age rápido para resolver problemas",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Em um momento difícil, sua reação natural é:",
        options: [
          {
            text: "Avaliar cuidadosamente antes de agir",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "Buscar uma alternativa criativa para escapar da situação",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Enfrentar diretamente com força e velocidade",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
      {
        question: "Qual filosofia faz mais sentido para você?",
        options: [
          {
            text: "O sucesso vem com paciência e controle",
            points: { jiuJitsu: 1, capoeira: 0, muayThai: 0 },
          },
          {
            text: "A vida deve ser vivida com liberdade e ritmo",
            points: { jiuJitsu: 0, capoeira: 1, muayThai: 0 },
          },
          {
            text: "Superar limites exige força e coragem",
            points: { jiuJitsu: 0, capoeira: 0, muayThai: 1 },
          },
        ],
      },
    ];

    await Question.insertMany(questions);

    console.log("Banco populado com as perguntas!");
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}

seedDB();
