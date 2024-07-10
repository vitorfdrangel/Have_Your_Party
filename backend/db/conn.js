const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://vitorrangel:j8BX1DNgjYtJPRva@cluster0.g0xpclo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`erro: ${error}`);
  }
}

module.exports = main;
