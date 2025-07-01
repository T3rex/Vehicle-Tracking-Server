const data = require("./data.json");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

let index = 0;

app.get("/api/location", (req, res) => {
  if (index >= 0 && index < data.length) {
    return res.status(200).json(data[index++]);
  } else {
    if (index >= data.length) {
      index = 0;
      return res.status(204).send();
    }
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
