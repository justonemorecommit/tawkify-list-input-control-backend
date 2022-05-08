const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());

let list = [];

app.get("/list", (req, res) => {
  res.json(list);
});

app.put("/list", (req, res) => {
  list = req.body;
  res.json(list);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.info(`Server is listening at ${port}`);
});
