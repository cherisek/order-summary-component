import React from "react";
import Header from './Header';
import Plan from './Plan';


const Container = () => {
  return (
    <div className="container">
      <Header />
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <Plan />
        <div className="complete-payment">
          <button>Proceed to Payment</button>
        </div>
        <div className="cancel-payment">
          <a href="/">Cancel Order</a>
        </div>
      </div>
    </div>
  )
}

export default Container; 