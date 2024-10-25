import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PlayerCard from './PlayerCard';

const PlayerLists = ({ coins, setCoins }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [viewingSelected, setViewingSelected] = useState(false);

    useEffect(() => {
        const fetchPlayers = async () => {
            const response = await fetch('players.json');
            const data = await response.json();
            setPlayers(data);
        };

        fetchPlayers();
    }, []);

    const parsePrice = (priceString) => {
        return Number(priceString.replace(/[^0-9.-]+/g, ""));
    };

    const togglePlayerSelection = (player, isSelecting) => {
        const playerPrice = parsePrice(player.price);
        
        if (isSelecting) {
            if (selectedPlayers.length >= 11) {
                // Show one toast when trying to select more than 11 players
                if (selectedPlayers.length === 11) {
                    toast.error("You can only select up to 11 players.");
                }
                return; // Exit if at limit
            }

            if (coins >= playerPrice) {
                setSelectedPlayers((prev) => [...prev, player]);
                setCoins((prevCoins) => prevCoins - playerPrice);
                toast.success(`${player.name} selected!`);
            } else {
                toast.error(`Not enough coins to select ${player.name}.`);
            }
        } else {
            // Deselecting the player
            setSelectedPlayers((prev) => prev.filter((p) => p !== player));
            setCoins((prevCoins) => prevCoins + playerPrice);
            toast.info(`${player.name} removed from selection.`);
        }
    };

    const availablePlayersCount = players.length - selectedPlayers.length;

    const playersToDisplay = viewingSelected 
        ? selectedPlayers 
        : players.filter(player => !selectedPlayers.includes(player));

    const handleDeletePlayer = (player) => {
        setSelectedPlayers(prev => prev.filter(p => p !== player));
        const playerPrice = parsePrice(player.price);
        setCoins(prevCoins => prevCoins + playerPrice);
        toast.info(`${player.name} removed from selection.`);
    };

    const handleAddMorePlayers = () => {
        setViewingSelected(false);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">
                    {viewingSelected ? "Your Selected Dream 11" : "Available Players"}
                </h2>

                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setViewingSelected(false)}
                        className={`bg-green-500 text-white px-4 py-2 rounded mr-2 ${viewingSelected ? "opacity-50" : ""}`}
                    >
                        Available Players ({availablePlayersCount})
                    </button>
                    <button
                        onClick={() => setViewingSelected(true)}
                        className={`bg-blue-500 text-white px-4 py-2 rounded ${!viewingSelected ? "opacity-50" : ""}`}
                    >
                        Selected Players ({selectedPlayers.length}/11)
                    </button>
                </div>

                {viewingSelected ? (
                    <div className="space-y-4">
                        {selectedPlayers.map((player, index) => (
                            <div key={index} className="flex items-center justify-between bg-white p-4 rounded shadow">
                                <div className="flex items-center">
                                    <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full mr-3" />
                                    <div>
                                        <h4 className="font-bold">{player.name}</h4>
                                        <p className="text-sm text-gray-600">{player.type}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDeletePlayer(player)}
                                    className="text-red-500 hover:text-red-400"
                                >
                                    <AiFillDelete size={24} />
                                </button>
                            </div>
                        ))}

                        {selectedPlayers.length < 11 && (
                            <button
                                onClick={handleAddMorePlayers}
                                className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
                            >
                                Add More Players
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {playersToDisplay.map((player, index) => (
                            <PlayerCard 
                                key={index} 
                                player={player} 
                                onToggleSelection={togglePlayerSelection}
                                selectedPlayers={selectedPlayers}
                                coins={coins} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PlayerLists;
