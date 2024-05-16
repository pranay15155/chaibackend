require('dotenv').config 

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("ye duniya mitti ka khilona hai jo mil gaya wo mitti hai jo na mila wo sona hai!");
});

app.get('/twitter',(req,res)=>{
    res.send('pranay.com');
})
app.get("/login", (req, res) => {
  res.send(
    "<h1>login html</h1>"
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});