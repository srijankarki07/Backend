const bodyParser = require("body-parser");
const { configDotenv } = require("dotenv");
const express = require("express");
const puppeteer = require("puppeteer");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const { listdbs } = require("./db/databases");
const { connectDB } = require("./db");
const mongoose = require("mongoose");
const { Cat } = require("./Models/cats");
const { Stock } = require("./Models/stocks");
const { Student } = require("./Models/student");
const {
  createStocks,
  listStocks,
  removeStock,
  upadteStock,
  getStocks,
} = require("./controllers/stocksController");
const { stocksRouter } = require("./routers/stocksRouter");
const {
  createPhone,
  removePhone,
  upadtePhone,
  listPhone,
  getPhone,
} = require("./controllers/phoneController");
const {
  createCat,
  listCat,
  removeCat,
  getCat,
  upadteCat,
} = require("./controllers/catController");
const { phoneRouter } = require("./routers/phoneRouter");
const { catRouter } = require("./routers/catRouter");
const { abcd } = require("./middleware/sampleMiddleware");
const { requestTimer } = require("./middleware/requestTimer");
const app = express();

configDotenv();
app.use(bodyParser.json());
app.use(cors());
app.use("/files", express.static("screenshots"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/abc", (req, res) => {
  console.log(req.body);
  const a = new Date();

  const capture = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(req.body.name);
    await page.screenshot({
      path: `./screenshots/${a.getTime()}.png`,
    });

    await browser.close();
  };

  capture();

  res.send(`${a.getTime()}.png`);
});

app.get("/about", (req, res) => {
  console.log(req);
  res.send("about this app");
});

app.get("/mongodb", async (req, res) => {
  console.log(req);
  const client = await connectDB();
  const dbs = await listdbs(client);

  res.send(dbs);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((error) => {
    console.log("error");
  });

app.use("/stocks", stocksRouter);
app.use("/phone", phoneRouter);
app.use("/catss", catRouter);
app.use("/stocks", requestTimer, stocksRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening.....${PORT}`));
