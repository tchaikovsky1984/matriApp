import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className = "cardDiv">
      <div className = "imgDiv"></div>
      <div className = "textDiv">
        <h1>{props.head}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
