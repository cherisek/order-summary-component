import React from 'react'; 
import HeroImg from '../images/illustration-hero.svg';

const Header = () => {
  return (
    <div className="hero-container">
      <img src={HeroImg} alt="hero-img"/>
    </div>
  )
}

export default Header; 