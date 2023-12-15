const bodyParser = require("body-parser");
const { configDotenv } = require("dotenv");
const express = require("express");
const puppeteer = require("puppeteer");
const { MongoClient } = require("mongodb");
const { listdbs } = require("./db/databases");
const { connectDB } = require("./db");
// const { listStocks, addStock } = require("./db/stocks");
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

// respond with "hello world" when a GET request is made to the homepage
configDotenv();
app.use(bodyParser.json());
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

  //res.send(`http://localhost:3000/files/${a.getTime()}.png`);
  // res.sendFile(`C:\Users\Sameer\Desktop\newexp\screenshots\${a.getTime()}.png`);
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

// app.get("/stocks", async (req, res) => {
//   console.log(req);
//   const client = await connectDB();
//   const stocks = await listStocks(client);

//   res.send(stocks);
// });

// app.post("/stocks", async (req, res) => {
//   console.log(req);
//   const client = await connectDB();

//   const stocks = await addStock(client, req.body);

//   res.send(stocks);
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((error) => {
    console.log("error");
  });

// app.get("/addcat", async (req, res) => {
//   const kitty = new Cat({ name: "Zildjian" });
//   kitty.save().then(() => console.log("meow"));
//   res.send(kitty);
// });

// app.post("/addcat", async (req, res) => {
//   console.log(req.body);
//   const kitty = new Cat({ name: req.body.name });
//   kitty.save().then(() => console.log("meow"));
//   res.send(kitty);
// });

// app.get("/catsbyid", async (req, res) => {
//   console.log(req.params, "catssss");
//   try {
//     const cats = await Cat.findById(req.query.id);
//     res.send(cats);
//   } catch (err) {
//     console.log(err);
//     res.send(err);
//   }
// });

app.use("/stocks", stocksRouter);
app.use("/phone", phoneRouter);
app.use("/catss", catRouter);
app.use("/stocks", requestTimer, stocksRouter);
// app.post("/stocks/add" , createStocks);
// app.get("/stocks",listStocks);
// app.delete("/stocks/:id" , removeStock);
// app.get("/stocks/:id",getStocks);
// app.put("/stocks", upadteStock);

// app.post("/phone/add", createPhone);
// app.get("/phone", listPhone);
// app.delete("/phone/:id", removePhone);
// app.get("/phone/:id", getPhone);
// app.put("/phone", upadtePhone);

// app.post("/catss/add", createCat);
// app.get("/catss", listCat);
// app.delete("/catss/:id", removeCat);
// app.get("/catss/:id", getCat);
// app.put("/catss", upadteCat);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening.....${PORT}`));
