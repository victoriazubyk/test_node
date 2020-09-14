const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const authorRouter = require("./routes/author");
const bookRouter = require("./routes/book");

app.use('/groups',  authorRouter);
app.use('/lessons',  bookRouter);

app.listen(4200, () => {
  console.log("Server is runing on 4200 port");
});