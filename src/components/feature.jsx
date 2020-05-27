import React from 'react';

const Feature = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h3>
        <strong>{props.title}</strong>
      </h3>
      <h5>{props.description}</h5>
    </div>
  );
};

export default Feature;
