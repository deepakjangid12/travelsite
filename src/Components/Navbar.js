
import React, { useState, useEffect } from 'react';
import "../App.css";
import myImage1 from '../Resources/casa-simoes-197cde.jpeg'; 
import myImage2 from '../Resources/prism-and-palette-c94d47 (1).jpeg'
import myImage3 from '../Resources/Zkx-Miol0Zci9UK7_the-charcoal-villa-fe841e.jpeg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function HomePage() {
    const images = [myImage1, myImage2,myImage3]; 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500); 

        return () => clearInterval(intervalId); 
    }, [images.length]);

    return (
        <div>
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
                    <a href="#" className="text-3xl font-bold text-gray-800">STAY VISTA</a>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">Explore</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Luxury Getaways</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">List Your Property</a>
                        <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">Login</button>
                    </div>
                    {/* Mobile  */}
                    <div className="flex md:hidden items-center">
                        <a href="tel:+919167928471" className="text-gray-600 flex items-center mr-4">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 23c-6.061 0-11-4.939-11-11s4.939-11 11-11 11 4.939 11 11-4.939 11-11 11zm1-18h-2v6h2v-6zm0 8h-2v2h2v-2z" />
                            </svg>
                            Call Us
                        </a>
                        <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="text-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M4 5h16c.553 0 1 .447 1 1s-.447 1-1 1H4c-.553 0-1-.447-1-1s.447-1 1-1zm0 6h16c.553 0 1 .447 1 1s-.447 1-1 1H4c-.553 0-1-.447-1-1s.447-1 1-1zm0 6h16c.553 0 1 .447 1 1s-.447 1-1 1H4c-.553 0-1-.447-1-1s.447-1 1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <nav className="flex flex-col p-4 space-y-2">
                            <a href="#" className="text-gray-600 hover:text-blue-600">Explore</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600">Luxury Getaways</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600">List Your Property</a>
                        </nav>
                    </div>
                )}
            </header>

            <div 
                className="relative bg-center bg-cover" 
                style={{ backgroundImage: `url(${images[currentImageIndex]})`, height: '80vh' }} 
            >
                <div className="flex items-center justify-center h-full absolute inset-0">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Newly Launched Villas</h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mb-8">Explore Getaways</button>
                    </div>
                </div>
            </div>

            <div className="relative -mt-[70px]">
            <div className="bg-white p-6 rounded shadow-md mx-2  sm:mx-10">
<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">

    <input
        type="text"
        placeholder="Where To?"
        className="border border-gray-300 rounded p-2 flex-grow w-full sm:w-auto"
    />

    <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Check-in Date (DD/MM/YY)"
        className="border border-gray-300 rounded p-2 flex-grow w-full sm:w-auto"
    />

    <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Check-out Date (DD/MM/YY)"
        className="border border-gray-300 rounded p-2 flex-grow w-full sm:w-auto"
    />

    <select className="border border-gray-300 rounded p-2 flex-grow w-full sm:w-auto">
        <option>2 Guests, 1+ Rooms</option>
        <option>1 Guest, 1 Room</option>
        <option>2 Guests, 1 Room</option>
        <option>3 Guests, 2 Rooms</option>
    </select>

    <button className="bg-black text-white rounded px-4 py-2">SEARCH</button>

</div>


            <div className="mt-4 bg-orange-100 text-center p-3 rounded">
                Finding your ideal vacation spot should be easy! We're here to help.
                <a href="#" className="text-blue-500 underline ml-2">Request Callback</a>
            </div>
        </div>
            </div>
        </div>
    );
}

export default HomePage;
