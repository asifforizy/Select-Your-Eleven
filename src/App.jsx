import React, { Suspense, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AvailablePlayers from './Components/AvailablePlayer/AvailablePlayers';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';

const playerPromise = fetch('players.json').then(res => res.json());



const App = () => {

const [coin , setCoin] = useState(120000000);
const [toggle , setToggle ] = useState(true);
const [selectedPlayers , setSelectedPlayers ] = useState([]);




  return (
    <div className='lg:w-10/12 mx-auto' >
      <Navbar coin={coin}></Navbar>
      <Hero  ></Hero>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-bold'>Players</h1>

        <div>
          <button onClick={()=> setToggle(true)} className={` ${toggle ? 'bg-lime-400 border py-2 px-3 rounded-l-lg' : 'border py-2 px-3 rounded-l-lg '} ` } >Available</button>
          <button onClick={()=> setToggle(false)} className={` ${!toggle ? 'bg-lime-400 border py-2 px-3 rounded-r-lg' : 'border py-2 px-3 rounded-r-lg '} ` } >Selected ({selectedPlayers.length})</button>
        </div>


      </div>


      <Suspense fallback={<div>Loading players...</div>}>

      {
        toggle ?  <AvailablePlayers  setSelectedPlayers={ setSelectedPlayers}  selectedPlayers={selectedPlayers} coin = {coin} setCoin={setCoin} playerPromise={playerPromise} ></AvailablePlayers> : <SelectedPlayers setSelectedPlayers={ setSelectedPlayers} selectedPlayers={selectedPlayers} coin = {coin} setCoin={setCoin}></SelectedPlayers>
      }
        
      </Suspense>



    </div>
  );
};

export default App;