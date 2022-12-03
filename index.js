// Dependencies
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const errorHandler = require("#middlewares/errorHandler.js");
const contructCors = require("#middlewares/corsHandler.js");
const connection = require("#database/index.js");
const router = require("#routes/index.js");

const app = express();

const corsOption = {
  origin: ["http://localhost:3000", "https://www.nfthost.app"],
  optionsSuccessStatus: 200,
};

const corsHandler = contructCors(corsOption);

app.options(cors(corsOption));
app.use(corsHandler);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

connection.once("open", () => {
  console.log("[nfthost] connected to MongoDB");
  app.listen(process.env.PORT || 8080, () => {
    console.log(`[nfthost] listening at port ${process.env.PORT || 8080}`);
  });
});

// const { generateThirdPartyToken } = require('../middlewares/jwt');
// console.log(generateThirdPartyToken({ origin: 'https://www.nfthost.app/' }))
