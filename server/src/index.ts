import express from "express";

const app = express();
const port = 8000;

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/hello", (req, res) => {
  res.json({
    hello: "hI",
    age: 25,
  });
});

app.get("/email-count", (req, res) => {
  res.json({
    count: 10,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
