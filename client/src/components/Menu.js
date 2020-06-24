import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../cards.png';

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="moveInLeft">BlackJack</h1>

      <img className="menu__card fadeIn" src={cards} alt="Cards" />
      <div className="options fadeIn">
        <Link to="/Play" className="btn">
          Play
        </Link>
        <Link to="/Rules" className="btn">
          Rules
        </Link>
        <Link to="/Settings" className="btn">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Menu;
