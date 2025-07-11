const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/conn");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const questionsRoutes = require("./routes");
app.use("/quiz", questionsRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, async () => {
      console.log(`O servidor está online na porta ${port}!`);
    });
  } catch (error) {}
};

startServer();
