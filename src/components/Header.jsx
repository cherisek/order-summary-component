import React from 'react'; 
import HeroImg from '../images/illustration-hero.svg';

const Header = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="hero-img"/>
    </div>
  )
}

export default Header; 