// src/Navbar.js
import Logo from '../../assets/logo.png';
import { BsCoin } from "react-icons/bs";

const Navbar = ({ coins }) => {
    return (
        <header className="bg-white shadow-lg text-gray sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold flex items-center">
                    <img src={Logo} alt="logo" className="h-10 mr-2" />
                    <span>Your App Name</span>
                </div>
                <nav>
                    <ul className="flex space-x-6 items-center">
                        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Fixtures</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Teams</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Schedules</a></li>
                        <li>
                            <button className="flex items-center bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
                                {coins} Coin <BsCoin className="ml-2" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
