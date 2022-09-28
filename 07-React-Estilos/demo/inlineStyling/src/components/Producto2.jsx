import React from 'react';

const divStyle = {
  margin: '10px',
  border: '1px solid pink',
};
const pStyle = {
  fontSize: '30px',
  textAlign: 'left',
};

function Product(props) {
  return (
    <div style={divStyle}>
      <h3>{props.title}</h3>
      <p style={pStyle}>{props.price}</p>
    </div>
  );
}

export default Product;
