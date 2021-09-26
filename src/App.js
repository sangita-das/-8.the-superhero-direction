import './App.css';
import React from 'react';
import Cart from './Components/Cart/Cart';
import Carts from './Components/Carts/Carts';
import Detail from './Components/Detail/Detail';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import Hero from './Components/Hero-section/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Details></Details>


    </div>
  );
};

export default App;