import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";

const EventPage = () => {
  const data = useLoaderData();

  const datetime = new Date(data.datetime);

  const day = datetime.getDate();
  const month = datetime.getMonth() + 1;
  const year = datetime.getFullYear();

  const hour = datetime.getHours();
  const min = datetime.getMinutes();

  const am = datetime.gett;

  useEffect(() => {
    // Dynamically load the Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
        key: 'rzp_test_V8QAkPFCVP47nH', // Enter the Key ID generated from the Dashboard
        amount: order.amount,
        currency: order.currency,
        name: 'eventease',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id,
        handler: function (response) {
          alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Pranshu Singh',
          email: 'singhpranshu950@gmail.com',
          contact: '7802945268'
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#F37254'
        }
      };

      // Check if Razorpay script is loaded
      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
          alert(`Payment failed. Error: ${response.error.description}`);
        });
        rzp1.open();
      } else {
        alert('Razorpay SDK failed to load. Are you online?');
      }
    } catch (error) {
      console.error('Error creating order or initiating payment', error);
    }}

  return (
    // <div>
    //   <div>{data.eventDetails.eventName}</div>
    //   <div>{data.eventDetails.venueName}</div>
    //   <div>{data.eventDetails.country}</div>
    //   <div>{data.eventDetails.pinCode}</div>
    //   <div>{data.eventDetails.state}</div>
    //   <div>{data.eventDetails.city}</div>
    //   <div>{data.eventDetails.addressL1}</div>
    //   <div>{data.eventDetails.addressL2}</div>
    //   <div>{data.eventDetails.price}</div>
    //   <div>{data.datetime}</div>
    // </div>

    <div className="flex flex-col w-full mt-16 bg-gray-100 p-4 py-8">
      <div className="flex flex-col w-full ">
        <div className="text-3xl font-semibold">
          {data.eventDetails.eventName}
        </div>
        <div className="text-justify mt-2">
          {data.eventDetails.eventDescription}
        </div>
        <div className="text-xl  mt-4">
          Starts at {hour % 12}:{min} {hour > 12 ? "P.M." : "A.M."}
        </div>
        <div className="text-xl">
          On {day}/{month}/{year}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="text-xl mt-8">₹{data.eventDetails.price} onwards</div>
        <Link
          className=" w-full flex text-xl justify-center mt-2 bg-gray-950 text-white rounded-lg py-4 hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          onClick={handlePayment}
        >
          Continue to payment
        </Link>
      </div>
    </div>
  );
};

export default EventPage;
