import React from 'react';
import '../index.css'

const PriceCard = ({ plan }) => {
  return (
    <div className="card">
      <h2 className="card-title" style={{color:'grey'}}>{plan.title}</h2>
      <h3 className="card-price">{plan.price}</h3>
      <ul className="card-features">
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.isEnabled ? 'enabled' : 'disabled'}>
            {feature.isEnabled ? '✔' : '✖'} {feature.name}
          </li>
        ))}
      </ul>
      <button className="card-button">BUTTON</button>
    </div>
  );
};

export default PriceCard;
