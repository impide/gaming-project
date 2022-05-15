// Dependencies
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to MongoDb
mongoose
    .connect(
        "mongodb+srv://Impide:g4ren22macia@cluster0.w3vsf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

// Routes
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

// Express
const app = express();

// Use express & bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/images", express.static(path.join("backend/images")));

// Header Autorization
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
