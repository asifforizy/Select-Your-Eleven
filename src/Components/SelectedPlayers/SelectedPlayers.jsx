import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import SelectedCard from '../../SelectedCard/SelectedCard';

const SelectedPlayers = ({ selectedPlayers}) => {
    return (
        <div>
            {
                selectedPlayers.map(player => <SelectedCard key={player.id} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;