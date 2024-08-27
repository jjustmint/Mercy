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
const Login = require("./routes/Login")
const Register = require("./routes/register")
const Pet = require("./routes/Pet")

app.use(express.json());
app.use(cors({
   origin:['http://localhost:5173'],
  credentials: true
}));

app.use(cookieParser());

app.use(bodyParser.json({ type: "application/json" }));

app.post("/register", Register);

app.post("/login", Login);

app.get("/pet/:id", auth, Pet)

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}...`);
});