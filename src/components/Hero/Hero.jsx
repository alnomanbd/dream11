// src/Hero.js
import BannerLogo from '../../assets/banner-main.png'; // Replace with your logo path
import HeroBg from '../../assets/bg-shadow.png'; // Replace with your background image path

const Hero = ({ onClaimCredits }) => {
    return (
        <div 
            className="container h-[545px] mx-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroBg})` }}
        >
            <div className="flex items-center justify-center rounded-lg h-full bg-black bg-opacity-50">
                <div className="text-white text-center">
                    <img src={BannerLogo} alt="Logo" className="mb-6 w-32 h-auto mx-auto" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className="text-lg mb-8">
                        Beyond Boundaries, Beyond Limits
                    </p>
                    <button 
                        className="bg-yellow-500 text-gray-800 px-6 py-3 rounded hover:bg-yellow-400 transition duration-300"
                        onClick={onClaimCredits} // Trigger function on button click
                    >
                        Claim Free Credits
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
