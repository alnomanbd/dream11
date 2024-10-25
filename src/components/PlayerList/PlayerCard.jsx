import { FaStar, FaUser } from 'react-icons/fa'; 
import { MdFlag } from 'react-icons/md'; 

const PlayerCard = ({ player, onToggleSelection, selectedPlayers, coins }) => {
    const isSelected = selectedPlayers.includes(player);

    const parsePrice = (priceString) => {
        return Number(priceString.replace(/[^0-9.-]+/g, ""));
    };

    const handleToggleSelection = () => {
        console.log("Toggling selection for:", player.name);
        onToggleSelection(player, !isSelected);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
            <img src={player.image} alt={player.name} className="w-full h-56 object-cover rounded-lg" />
            <div className="flex items-center mt-2">
                <FaUser className="text-gray-600 mr-2" />
                <span className="font-semibold">{player.name}</span>
            </div>
            <div className="flex justify-between items-center my-2">
                <div className="flex items-center">
                    <MdFlag className="text-gray-600 mr-1" />
                    <span className="text-sm">{player.country}</span>
                </div>
                <span className="text-sm">{player.type}</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center">
                    {[...Array(player.rating)].map((_, index) => (
                        <FaStar key={index} className="text-yellow-500" />
                    ))}
                </div>
                <span className="text-sm">{player.rating}/5</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-lg">{player.price} Coins</span>
                <button
                    onClick={handleToggleSelection}
                    className={`bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300`}
                >
                    {isSelected ? 'Deselect' : 'Select'}
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;
