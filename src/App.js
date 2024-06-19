
import React from 'react';
import PriceCard from './components/PriceCard';
import './App.css';
import {plans} from './data.js';



const App = () => {
  return (
    <div className="app">
      {plans.map((plan, index) => (
        <PriceCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default App;

