import React from "react";
import MusicIcon from '../images/icon-music.svg';

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan-left">
        <img className="music-icon" src={MusicIcon} alt="music icon" />
        <div className="order-plan-details">
          <div className="order-plan-type"><h3>Annual Plan</h3></div>
          <div className="order-plan-price">$59.99/year</div>
        </div>
      </div>
      <div className="plan-right"><a href="/">Change</a></div>
  </div>
  )
}

export default Plan;