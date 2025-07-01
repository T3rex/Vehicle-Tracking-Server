const data = require("./data.json");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/location", (req, res) => {
  const index = parseInt(req.query.index, 10) || 0;
  try {
    if (index < data.length) {
      return res.status(200).json({ success: true, data: data[index] });
    } else {
      return res.status(204).send();
    }
  } catch (error) {
    return res.status(400).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
