import React, { useState } from 'react';
import profile from '../../assets/Group.png'


const PlayerCard = ({ player , setCoin , coin }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = ()=>{
        setIsSelected(true);
        coin < player.price ? alert("You don't have enough coins") : setCoin(coin - player.price);

    }


    return (
        <div >
            <div className="card bg-base-100 shadow-sm border">
                <figure className='p-4 '>
                    <img
                        src={player.playerImage}
                        alt="Shoes"
                        className='rounded-2xl h-60 w-full object-cover' />
                </figure>
                <div className="card-body">
                    <div className='flex  gap-2'>
                        <img src={profile} alt="Profile" className="w-5 h-5 rounded-full mb-2" />
                        <h1 className='font-semibold'>{player.name}</h1>
                    </div>
                    <div className='flex items-center '>
                        <p>{player.country}</p>
                        <button className=' border rounded-md px-2'>{player.playingRole}</button>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <h1>Rating :</h1>
                        <h1>{player.rating}</h1>
                    </div>

                    <div className='flex items-center justify-between' >
                        <h1>{player.battingStyle}</h1>
                        <h1>{player.bowlingStyle}</h1>
                    </div>

                    <div className='flex items-center justify-between' >
                        <h1>Price : ${player.price}</h1>
                        <button disabled={isSelected} onClick={handleClick} className=' border rounded-md px-2'>{isSelected ? "Selected" : "Choose player"}</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;