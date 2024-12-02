import React, { useRef } from 'react';

const accommodations = [
    {
        name: 'Pranaam',
        location: 'Alibaug, Maharashtra',
        guests: 'Upto 15 Guests ✧ 6 Rooms ✧ 6 Baths',
        price: '₹93,700',
        img: 'https://img.vistarooms.com/gallery/aloe-villa-39e674.jpg',
    },
    {
        name: 'Casa Simoes - Candolim',
        location: 'Goa, Goa',
        guests: 'Upto 7 Guests ✧ 3 Rooms ✧ 3 Baths',
        price: '₹56,383',
        img: 'https://images.prismic.io/stay-vista/Zkx-Miol0Zci9UK7_the-charcoal-villa-fe841e.jpg',
    },
    {
        name: 'Villa Amethyst - Saligao',
        location: 'Goa, Goa',
        guests: 'Upto 10 Guests ✧ 4 Rooms ✧ 4 Baths',
        price: '₹21,600',
        img: 'https://img.vistarooms.com/gallery/pranaam-d602fe.jpg',
    },
    {
        name: 'Sidhowal Lodge',
        location: 'Shimla, Himachal Pradesh',
        guests: 'Upto 3 Guests ✧ 1 Room ✧ 1 Bath',
        price: '₹9,950',
        img: 'https://img.vistarooms.com/gallery/thea-homes-d0fbe3.jpg',
    },
    {
        name: 'The Ocean View',
        location: 'Lonavala, Maharashtra',
        guests: 'Upto 8 Guests ✧ 4 Rooms ✧ 4 Baths',
        price: '₹45,500',
        img: 'https://img.vistarooms.com/gallery/wander-beyond-a25696.jpg',
    },
    {
        name: 'Mountain Retreat',
        location: 'Manali, Himachal Pradesh',
        guests: 'Upto 5 Guests ✧ 3 Rooms ✧ 2 Baths',
        price: '₹15,000',
        img: 'https://img.vistarooms.com/gallery/casa-del-mar-nandgaon-9fb16c.jpg',
    },
    {
        name: 'Sunset Villa',
        location: 'Ooty, Tamil Nadu',
        guests: 'Upto 10 Guests ✧ 4 Rooms ✧ 4 Baths',
        price: '₹30,000',
        img: 'https://img.vistarooms.com/gallery/magnolia-villa-f13a4a.jpg',
    },
    {
        name: 'Forest Lodge',
        location: 'Coorg, Karnataka',
        guests: 'Upto 6 Guests ✧ 3 Rooms ✧ 3 Baths',
        price: '₹18,500',
        img: 'https://img.vistarooms.com/gallery/dhauladhar-house-2b6639.jpg',
    },
    {
        name: 'River View Cottage',
        location: 'Rishikesh, Uttarakhand',
        guests: 'Upto 4 Guests ✧ 2 Rooms ✧ 2 Baths',
        price: '₹10,300',
        img: 'https://images.prismic.io/stay-vista/e6fac195-da9e-473d-a12d-4c5fe31eeb41_94ce8a488a7a23bb52834545ff24473e.png',
    },
    {
        name: 'Palace Hotel',
        location: 'Jaipur, Rajasthan',
        guests: 'Upto 8 Guests ✧ 5 Rooms ✧ 5 Baths',
        price: '₹75,200',
        img: 'https://img.vistarooms.com/gallery/villa-amethyst-1d5ed9.jpg',
    },
];

const TrendingSlider = ({title}) => {
    const rowRef = useRef(null);


    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            <div className="relative mt-4">
               
                <div
                    ref={rowRef}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide"
                >
                    {accommodations.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-md border border-gray-200 min-w-[250px] h-[350px] flex flex-col"
                        >
                            <img src={item.img} alt={item.name} className="rounded-t-lg h-1/2 w-full object-cover" />
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">{item.location}</p>
                                    <p className="text-sm">{item.guests}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-xl">{item.price}</span>
                                    <button className="bg-blue-500 text-white rounded py-1 px-2">→</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingSlider;
