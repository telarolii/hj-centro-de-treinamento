const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.xr9bvjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
