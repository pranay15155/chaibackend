require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000; // Use the port from environment variable or default to 4000

const githubdata = [
  {
    sudden: 121879771,
    drew: 578738785.7981353,
    music: {
      cool: false,
      affect: 918608213.3007464,
      way: true,
      plus: 2114180383,
      rate: true,
      traffic: true,
    },
    gate: true,
    stronger: -2018095855,
    disappear: -1039412692.9024038,
  },
  -1020580309.3327608,
  "eaten",
  "winter",
  1969567581,
  "grabbed",
];

app.get("/", (req, res) => {
  res.send(
    "ye duniya mitti ka khilona hai jo mil gaya wo mitti hai jo na mila wo sona hai!"
  );
});

app.get("/twitter", (req, res) => {
  res.send("pranay.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>login html</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
