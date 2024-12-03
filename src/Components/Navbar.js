
import React, { useState, useEffect } from 'react';
import "../App.css";
import myImage1 from '../Resources/casa-simoes-197cde.jpeg';
import myImage2 from '../Resources/prism-and-palette-c94d47 (1).jpeg'
import myImage3 from '../Resources/Zkx-Miol0Zci9UK7_the-charcoal-villa-fe841e.jpeg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function HomePage() {
    const images = [myImage1, myImage2, myImage3];
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
                    <a href="#">
                        <img src="data:image/svg+xml,%3Csvg%20class%3D%22NewHeader_c-new_header__logo__g4qFD%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2036.48%22%3E%3Cpath%20fill%3D%22%231e1e1e%22%20d%3D%22M12.2%2C33.43%2C16%2C22.73a2.89%2C2.89%2C0%2C0%2C0%2C.18-1A2.63%2C2.63%2C0%2C0%2C0%2C13.63%2C19H10.89a2.79%2C2.79%2C0%2C0%2C0-2.8%2C2.79h0a2.69%2C2.69%2C0%2C0%2C0%2C.18%2C1Zm39.13-.33V20h-.59c-2.27%2C0-4.11%2C3-4.87%2C5.43h-.31V20.33a1.33%2C1.33%2C0%2C1%2C0-2.66%2C0v3.74h-.32c-1.5-1.95-4.12-4.27-6.54-4.27a2.22%2C2.22%2C0%2C0%2C0-2.41%2C2%2C.45.45%2C0%2C0%2C1%2C0%2C.11c0%2C1.8%2C2.52%2C2.56%2C5.11%2C3.65%2C4.19%2C1.82%2C5%2C4.14%2C5%2C5.89%2C0%2C2.62-1.72%2C4.26-4%2C5v0H48.7c1.75%2C0%2C2.63-1.42%2C2.63-3.38ZM13.86%2C0H2.07A2.07%2C2.07%2C0%2C0%2C0%2C0%2C2.08H0V15.43a2.07%2C2.07%2C0%2C0%2C0%2C2.07%2C2.06H8.73a1.33%2C1.33%2C0%2C0%2C0%2C1.34-1.33V12h.32c1.65%2C2.22%2C4.34%2C4.69%2C6.86%2C4.69a2.32%2C2.32%2C0%2C0%2C0%2C2.5-2.11%2C1.48%2C1.48%2C0%2C0%2C0%2C0-.21c0-2.05-2.14-2.94-4.78-4S9.72%2C8%2C9.72%2C5.13A5.43%2C5.43%2C0%2C0%2C1%2C13.87%2C0Zm54%2C0H65.32a2.1%2C2.1%2C0%2C0%2C0-2.11%2C2.08%2C2%2C2%2C0%2C0%2C0%2C.19.83l3.15%2C6.54%2C3.2-6.52a2%2C2%2C0%2C0%2C0%2C.2-.85A2.1%2C2.1%2C0%2C0%2C0%2C67.85%2C0ZM38.31%2C17.49c-1.75%2C0-2.63-1.41-2.63-3.38v-13h.59c2.27%2C0%2C4.11%2C3%2C4.86%2C5.42h.32V1.35A1.34%2C1.34%2C0%2C0%2C1%2C42.79%2C0h1.68a2.08%2C2.08%2C0%2C0%2C1%2C2.15%2C2%2C2.19%2C2.19%2C0%2C0%2C1-.11.67L42.39%2C14.1c-.76%2C2.12-1.86%2C3.39-3.66%2C3.39Zm19.83%2C19c-1.75%2C0-2.63-1.42-2.63-3.38V20h.59c2.27%2C0%2C4.11%2C3%2C4.86%2C5.43h.32V20.33A1.34%2C1.34%2C0%2C0%2C1%2C62.62%2C19H64.3a2%2C2%2C0%2C0%2C1%2C2.12%2C1.92%2C2%2C2%2C0%2C0%2C1-.09.72L62.22%2C33.09c-.76%2C2.11-1.87%2C3.39-3.67%2C3.39Zm0%2C0c-1.75%2C0-2.63-1.42-2.63-3.38V20h.59c2.27%2C0%2C4.11%2C3%2C4.86%2C5.43h.32V20.33A1.34%2C1.34%2C0%2C0%2C1%2C62.62%2C19H64.3a2.07%2C2.07%2C0%2C0%2C1%2C2.14%2C2h0a1.81%2C1.81%2C0%2C0%2C1-.11.65L62.22%2C33.09c-.76%2C2.11-1.87%2C3.39-3.67%2C3.39ZM54.74%2C0a4.58%2C4.58%2C0%2C0%2C1%2C4%2C2.87L63%2C10.8v3.31c0%2C2-.83%2C3.38-2.63%2C3.38s-3.06-1.28-3.82-3.39h0L52.14%2C2.26a3%2C3%2C0%2C0%2C1-.2-.84A1.58%2C1.58%2C0%2C0%2C1%2C53.68%2C0h1.06ZM70%2C17.49c-1.75%2C0-2.63-1.41-2.63-3.38V10.77l4-7.89C72.27%2C1.21%2C73.58%2C0%2C75.23%2C0H77.7A2.24%2C2.24%2C0%2C0%2C1%2C80%2C2.19V15.43a2.07%2C2.07%2C0%2C0%2C1-2.07%2C2.06H70ZM20.34%2C19c1.32%2C0%2C1.7%2C1.28%2C1.7%2C3.12v11c0%2C2-.88%2C3.38-2.63%2C3.38H15.23c-1.26%2C0-1.79-.69-1.79-1.57a13.17%2C13.17%2C0%2C0%2C1%2C.84-3.22L17%2C23.89c.77-2.16%2C1.75-4.89%2C3.3-4.89ZM29%2C19c-1.75%2C0-2.63%2C1.42-2.63%2C3.38V33.09c0%2C2%2C1%2C3.39%2C2.49%2C3.39a1.17%2C1.17%2C0%2C0%2C0%2C1.18-1.16V31h.32c1.68%2C2.08%2C4.34%2C4.68%2C6.86%2C4.68a2.32%2C2.32%2C0%2C0%2C0%2C2.51-2.11%2C1.47%2C1.47%2C0%2C0%2C0%2C0-.21c0-2-2.14-2.93-4.78-3.94s-5.25-2.45-5.25-5.3A5.42%2C5.42%2C0%2C0%2C1%2C33.85%2C19v0ZM4.17%2C23.58l4%2C10.94A1.48%2C1.48%2C0%2C0%2C1%2C8.3%2C35a1.47%2C1.47%2C0%2C0%2C1-1.46%2C1.45H2.07A2.07%2C2.07%2C0%2C0%2C1%2C0%2C34.41H0V21.06a1.35%2C1.35%2C0%2C0%2C1%2C1.29-1.39C2.46%2C19.67%2C3.21%2C21%2C4.17%2C23.58ZM75.83%2C31.9%2C71.79%2C21a1.28%2C1.28%2C0%2C0%2C1-.09-.48A1.47%2C1.47%2C0%2C0%2C1%2C73.16%2C19h4.77A2.07%2C2.07%2C0%2C0%2C1%2C80%2C21.07V34.42a1.35%2C1.35%2C0%2C0%2C1-1.29%2C1.39c-1.17%2C0-1.92-1.3-2.88-3.91ZM45.25%2C10.33%2C47.8%2C3.1l2.67%2C7.23Zm20%2C19%2C2.55-7.23%2C2.67%2C7.23Zm4.35%2C7.16H66.27a2.44%2C2.44%2C0%2C0%2C1-2.56-2.32v-.08a2.17%2C2.17%2C0%2C0%2C1%2C.13-.76l.91-2.6H71l1%2C2.56a2.18%2C2.18%2C0%2C0%2C1%2C.15.8A2.45%2C2.45%2C0%2C0%2C1%2C69.6%2C36.48Zm-20-19H46.27a2.45%2C2.45%2C0%2C0%2C1-2.57-2.32v-.08a2.43%2C2.43%2C0%2C0%2C1%2C.13-.76l.92-2.6H51l1%2C2.56a2.23%2C2.23%2C0%2C0%2C1%2C.14.81%2C2.45%2C2.45%2C0%2C0%2C1-2.5%2C2.39ZM31.33%2C14.11v-13h-.59c-2.27%2C0-4.12%2C3-4.87%2C5.42h-.31V1.34a1.34%2C1.34%2C0%2C0%2C0-2.67%2C0V5.08h-.31C21.07%2C3.13%2C18.46.81%2C16%2C.81a2.22%2C2.22%2C0%2C0%2C0-2.41%2C2s0%2C.07%2C0%2C.11c0%2C1.8%2C2.52%2C2.57%2C5.11%2C3.65%2C4.19%2C1.83%2C5%2C4.14%2C5%2C5.9%2C0%2C2.62-1.71%2C4.26-4%2C5v0h9C30.45%2C17.49%2C31.33%2C16.08%2C31.33%2C14.11Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="STAY VISTA" className="text-3xl font-bold text-gray-800 h-10" />
                    </a>

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

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2 flex-wrap">

                        <input
                            type="text"
                            placeholder="Where To?"
                            className="border border-gray-300 rounded p-2 flex-grow min-w-[200px] w-full sm:w-auto"
                        />

                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Check-in Date (DD/MM/YY)"
                            className="border border-gray-300 rounded p-2 flex-grow min-w-[200px] w-full sm:w-auto"
                        />

                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="Check-out Date (DD/MM/YY)"
                            className="border border-gray-300 rounded p-2 flex-grow min-w-[200px] w-full sm:w-auto"
                        />

                        <select className="border border-gray-300 rounded p-2 flex-grow min-w-[200px] w-full sm:w-auto">
                            <option>2 Guests, 1+ Rooms</option>
                            <option>1 Guest, 1 Room</option>
                            <option>2 Guests, 1 Room</option>
                            <option>3 Guests, 2 Rooms</option>
                        </select>

                        <button className="bg-black text-white rounded px-4 py-2 w-full sm:w-auto">SEARCH</button>
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
