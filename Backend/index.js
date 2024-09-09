const UserModel = require("./Models/User.js");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://thenagarajanv:gdsckce2024@gdsckce.axz22.mongodb.net/Gdsckce?retryWrites=true&w=majority&appName=Gdsckce"
).then(console.log("connected db"));

app.listen(3001, () => {
  console.log("server is running");
});

app.get("/", (req, res) => {
  UserModel.find({})
    .then((x) => res.json(x))
    .catch((err) => res.json(err));
});

app.post("/createUser",(req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})