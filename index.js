var Express = require("express");
var MangoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());
const CONNECTION_STRING =
  "mongodb+srv://emanikandan9750:emanikandan9750@default.egvab3d.mongodb.net/?retryWrites=true&w=majority&appName=default";

var DATABASENAME = "todoappdb";
var database;
app.listen(5038, () => {
  try {
    MangoClient.connect(CONNECTION_STRING, (error, client) => {
      database = client.db(DATABASENAME);
      console.log("mangodb connected successfully");
    });
  } catch (error) {
    console.log("Error: ", error);
  }
});

// const express = require("express");
// const { MongoClient } = require("mongodb"); // Corrected spelling of MongoClient
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const CONNECTION_STRING = "mongodb+srv://emanikandan9750:emanikandan9750@cluster0.2ecpqjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const DATABASE_NAME = "todoappdb";

// let database;

// app.listen(5038, () => {
//     MongoClient.connect(CONNECTION_STRING, (error, client) => {
//         if (error) {
//             console.error("Failed to connect to MongoDB:", error);
//             return;
//         }
//         database = client.db(DATABASE_NAME);
//         console.log("MongoDB connected successfully");
//     });
// });
