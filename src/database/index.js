const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;

connection.on(
  "error",
  console.error.bind(console, "[nfthost] mongoDB connection error:"),
);

module.exports = connection;
