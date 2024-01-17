const express = require("express")
require('dotenv').config();
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cors());

app.options("*", cors());

app.use(
    cors({
      origin: "*",
      methods: ["post", "get", "put", "delete"],
      "Access-Control-Allow-Credentials": true,
    })
  );


// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import all routes here
const user = require("./routes/user");


// app.use("/api/v1", home);
app.use("/api/v1", user);


app.get("/", (req,res ) => {
res.send("<h1>Hello</h1>")
})

module.exports = app;