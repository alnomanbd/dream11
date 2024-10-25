// src/Footer.js
import React from 'react';
import Logo from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center mb-6">
                <img 
                    src={Logo} 
                    alt="logo" 
                    className="mx-auto mb-4 w-32 h-auto" 
                />
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* About Us Column */}
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm">
                        We are committed to providing the best sports experience for our community. Join us for the latest news and events!
                    </p>
                </div>

                {/* Quick Links Column */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Services</a></li>
                        <li><a href="#" className="hover:text-yellow-500">About</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </div>

                {/* Subscribe Column */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Subscribe</h3>
                    <p className="text-sm mb-2">Stay updated with our latest news.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l border border-gray-300"
                        />
                        <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r hover:bg-yellow-400">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright Section */}
            <hr className="my-6 border-gray-700" />
            <div className="text-center">
                <p className="text-sm">&copy; 2024 Your Sports Community. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
