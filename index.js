const express = require("express");
const conn = require("./db");

const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public", { extensions: ["html", "htm"] }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}......`);
});
