// PaymentComponent.js
import React from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const handlePayment = async () => {
    try {
      // Create order on backend
      const orderResponse = await axios.post('http://localhost:5000/create-order', {
        amount: 500, // amount in rupees
        currency: 'INR',
        receipt: 'receipt#1'
      });
      const order = orderResponse.data;

      // Razorpay options
      const options = {
        key: 'rzp_test_oe3CVi6OakY3UW', // Enter the Key ID generated from the Dashboard
        amount: order.amount,
        currency: order.currency,
        name: 'Your Company Name',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id,
        handler: function (response) {
          alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(`Payment failed. Error: ${response.error.description}`);
      });

      rzp1.open();
    } catch (error) {
      console.error('Error creating order or initiating payment', error);
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentComponent;
