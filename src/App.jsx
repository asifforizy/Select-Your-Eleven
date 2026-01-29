import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  return (
    <div className='lg:w-10/12 mx-auto' >
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default App;