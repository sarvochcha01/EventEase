import express from 'express';
import Razorpay from 'razorpay';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

const razorpay = new Razorpay({
  key_id: 'rzp_test_V8QAkPFCVP47nH',
  key_secret: 'QYhDwU0hFcuINLLqLe8KSmiH'
});

app.post('/create-order', async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const options = {
    amount: amount * 100, // amount in smallest currency unit
    currency: currency,
    receipt: receipt
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
