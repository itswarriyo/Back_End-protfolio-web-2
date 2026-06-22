const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const enqueryroute = require("./App/Router/protfolio.router");
app.use("/api/enquery", enqueryroute);


app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.get("/" , (req,res) => 
  {
    res.send("Backend working")
  })

// 🔥 prevent multiple connections (IMPORTANT for Vercel)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DBURL);
    isConnected = true;
    console.log("MongoDB connected 🚀");
  } catch (err) {
    console.log("DB Error:", err.message);
  }
};

connectDB();


module.exports = app;
