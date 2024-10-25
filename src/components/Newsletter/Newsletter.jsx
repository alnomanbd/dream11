// src/Newsletter.js
import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-16 bg-gray-800 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Stay updated with the latest news and events.</p>
            <form className="flex justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l"
                />
                <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r hover:bg-yellow-400">
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
