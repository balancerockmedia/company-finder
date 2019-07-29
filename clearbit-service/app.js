const express = require("express");
const axios = require("axios");
const app = express();
const port = 3002;

function getResults(q) {
  return axios.get(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${q}`
  );
}

app.get("/autocomplete", async (req, res) => {
  const results = await getResults(req.query.q);
  res.json(results.data);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
