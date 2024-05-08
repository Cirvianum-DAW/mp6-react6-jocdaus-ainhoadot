import React from 'react';
import './Dau.css';

export const Dau = ({ valor }) => {
  return <div className={`Dau Dau--${valor}`}>{valor}</div>
};

export default Dau;