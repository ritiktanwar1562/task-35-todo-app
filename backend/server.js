const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
  });

app.use("/api/todos", todoRoutes);

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch((err) => {
    console.error("MONGO Error:",err);
});