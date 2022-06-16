const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://habray:bhoklaago@bhoklaago.lmlak.mongodb.net/bhoklaago";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Sucessfully Connected.");
});

db.on("error", () => {
  console.log("Connection Failed.");
});

module.exports = mongoose;
