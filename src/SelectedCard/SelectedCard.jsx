import React from 'react';

const SelectedCard = ({ player }) => {
    return (
        <div className='border my-5 p-5 rounded-lg flex items-center justify-between'>
            <div className='flex gap-5'>
                <div className='w-14 '> <img src={player.playerImage} alt="" className=' h-14 rounded-lg w-full object-cover' /></div>
                <div>
                    <h1 className='font-semibold'>{player.name}</h1>
                    <p>{player.playingRole}</p>

                </div>
            </div>
            <div ><h1 className='text-red-600 text-2xl'>X</h1></div>
        </div>
    );
};

export default SelectedCard;