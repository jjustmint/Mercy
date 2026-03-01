const express = require("express");
const app = express();
const port = 8001;
const mysql = require("mysql2")

const bodyParser = require("body-parser");
const cookieParser =require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors");

const auth = require("./middleware/auth")
const Pet = require("./controllers/Pet")
const mainRouter = require("./routes/index")

app.use(express.json());
app.use(cors({
   origin:['http://localhost:5173'],
  credentials: true
}));

app.use(cookieParser());

app.use(bodyParser.json({ type: "application/json" }));
app.use(mainRouter);
app.get("/pet/:id", auth, Pet)

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}...`);
});