

import React, { useRef } from 'react';

const destinations = [
    { name: 'Gurgaon', icon: '🏙️' },
    { name: 'Dehradun', icon: '🏞️' },
    { name: 'Jaipur', icon: '🏰' },
    { name: 'Bhimtal', icon: '🏔️' },
    { name: 'Kasauli', icon: '⛰️' },
    { name: 'Lonavala', icon: '🏞️' },
    { name: 'Karjat', icon: '🏕️' },
    { name: 'Manesar', icon: '🏡' },
    { name: 'Mussoorie', icon: '🌲' },
    { name: 'Chandigarh', icon: '🏛️' },
    { name: 'Nainital', icon: '🚣' },
    { name: 'Shimla', icon: '🏔️' },
    { name: 'Goa', icon: '🏖️' },
    { name: 'Alibaug', icon: '🏝️' },
    { name: 'Ooty', icon: '🌼' },
];

const Destinations = () => {
    const rowRef = useRef(null);

    const scrollLeft = () => {
        rowRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        rowRef.current.scrollBy({
            left: 200, 
            behavior: 'smooth'
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl  font-bold text-center">Pick A Destination</h2>
            <div className="relative mt-4">
                

                <div
                    ref={rowRef}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide"
                >
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className="relative  p-4 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center border border-gray-300 min-w-[190px] h-[140px]"
                        >
                            <span className="text-5xl">{destination.icon}</span>
                            <span className="mt-2 text-lg font-semibold">{destination.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
