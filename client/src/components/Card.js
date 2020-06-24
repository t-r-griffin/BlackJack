import React, { Fragment } from 'react';
import wtf from '../assets/PNG/blue_back.png';

export default function Card(props) {
  return (
    <div>
      <img src={props.cardValue} className="image1 cardStyle" />
      <img src={wtf} className="image2 cardStyle2" />
    </div>
  );
}
