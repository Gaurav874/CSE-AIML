import React from 'react';
// import "../components/Card.css";
const Card = (props) => {
  return (
    <div className="card">
    <h1>{props.name}</h1>
    <img src={props.pic} alt= "myimage" />
    <h2>{props.roll}</h2>
    </div>
  );
};

export default Card;