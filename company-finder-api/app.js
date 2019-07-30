const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

function getResults(q) {
  return axios.get(`http://clearbit-service:3002/autocomplete?q=${q}`);
}

app.get("/lookup", async (req, res) => {
  const results = await getResults(req.query.q);
  res.json(results.data);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
