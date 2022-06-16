const express = require("express");
const Food = require("./models/foodModel");
const app = express();

const db = require("./dbconnect.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Working.");
});

app.get("/getfoods", (req, res) => {
  Food.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
