import React, { Suspense, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AvailablePlayers from './Components/AvailablePlayer/AvailablePlayers';

const playerPromise = fetch('players.json').then(res => res.json());



const App = () => {

const [coin , setCoin] = useState(120000000)



  return (
    <div className='lg:w-10/12 mx-auto' >
      <Navbar coin={coin}></Navbar>
      <Hero  ></Hero>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Players</h1>
        <div>
          <button className='border py-2 px-3 rounded-l-lg bg-lime-400' >Available</button>
          <button className='border py-2 px-3 rounded-r-lg' >Selected (0)</button>
        </div>
      </div>


      <Suspense fallback={<div>Loading players...</div>}>
        <AvailablePlayers coin = {coin} setCoin={setCoin} playerPromise={playerPromise} ></AvailablePlayers>
      </Suspense>



    </div>
  );
};

export default App;