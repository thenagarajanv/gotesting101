const User = require('./Models/Users');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://thenagarajanv:gdsckce2024@gdsckce.axz22.mongodb.net/Gdsckce?retryWrites=true&w=majority&appName=Gdsckce"
).then(console.log("connected db"));


app.get("/", (req, res) => {
    User.find({})
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
});

app.post("/Cart/AddToCart", async (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { salesprice } = req.body;
    const { stocks } = req.body;
    const { mainImage } = req.body;
    const { amount } = req.body;
    const { count } = req.body;
    const userCart={
      id: id,
      name:name,
      salesprice:salesprice,
      stocks:stocks,
      mainImage:mainImage,
      amount:amount,
      count:count
    }
    const {userID}=req.body;
    const {userEmail}=req.body;
    const {userName}=req.body;
    if((await User.find({id:userID})).length== 0){
      await User.create({id:userID, email: userEmail, name:userName });
      await User.create(req.body);
    }
      if(User.findById(userID)){
        await User.updateOne(
          { id: userID },
          { $push: { cart: { ...userCart } } }
        );
      }
  });
