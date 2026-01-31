import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise , setCoin , coin }) => {

    const PlayersData = use(playerPromise);
    console.log(PlayersData);
    return (
        <div >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10'>
                {
                    PlayersData.map(player => <PlayerCard coin ={coin} setCoin={setCoin} key={player.id} player={player}></PlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;