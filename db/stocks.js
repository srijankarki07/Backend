const { MongoClient } = require("mongodb");
const { connectDB } = require(".");

async function listStocks(client) {
  try {
    await client.connect();
    const db = client.db("Sampledb");
    const collection = db.collection("Stocks");
    stocks = await collection.find({}).toArray();
    return stocks;
    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
  }
}

async function addStock(client, stock) {
  try {
    await client.connect();
    const db = client.db("Sampledb");
    const collection = db.collection("Stocks");
    stock = await collection.insertOne(stock);
    return stock;
    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
  }
}

module.exports = { listStocks, addStock };
