require('./models/db');
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT;
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));
const userRouter = require('./Routers/userRoutes');

app.use('/user', userRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


