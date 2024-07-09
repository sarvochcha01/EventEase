// server.js
const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const razorpay = new Razorpay({
    key_id: 'rzp_test_oe3CVi6OakY3UW',
    key_secret: 'uAN9zxX5A7kIvarhvFsykpdE',
});

app.post("/create-order", async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const options = {
    amount: amount * 100, // amount in smallest currency unit
    currency: currency,
    receipt: receipt,
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
