import React, { useRef } from 'react';

const stays = [
    {
        name: 'MS Dhoni',
        stayedAt: 'Shimla Manor',
        img: 'https://img.vistarooms.com/cdn-cgi/image/width=500px/https://images.prismic.io/stay-vista/83d683bf-9302-4cea-91f3-9150e248a1d3_Dhoni+%40Whispering+Pines.jpeg?auto=compress,format',
    },
    {
        name: 'Vijay Deverakonda',
        stayedAt: 'The Water Willow',
        img: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/08/29165730/Vijay-Deverakonda-net-worth-1600x900.jpg',
    },
    {
        name: 'Ananya Panday',
        stayedAt: 'Villa Amarillo',
        img: 'https://curlytales.com/wp-content/uploads/2024/09/Ananya-Panday.jpg',
    },
    {
        name: 'Soha Ali Khan',
        stayedAt: 'Le Sutra Great Escapes- Geometrica',
        img: 'https://img.vistarooms.com/cdn-cgi/image/width=500px/https://images.prismic.io/stay-vista/2331a9e9-099a-4225-bf31-af28b964e1d9_Soha+Ali+Khan.jpg?auto=compress,format',
    },
    {
        name: 'Suryakumar Yadav',
        stayedAt: 'The Barn',
        img: 'https://img.vistarooms.com/cdn-cgi/image/width=500px/https://images.prismic.io/stay-vista/a62290a9-0181-4976-883a-45bf7076a8ec_image00007.jpg?auto=compress,format',
    },
    {
        name: 'Shweta Tiwari',
        stayedAt: 'Greenwood Resort',
        img: 'https://img.mensxp.com/media/content/2021/May/Shweta-Tiwari-Posts-Video-Of-Ex-Husband-Physically-Abusing-Their-Son-1400x653_609a33be421a5.jpeg',
    },
];

const Stars = () => {
    const rowRef = useRef(null);

    return (
        <>
            <div className="p-6">
                <h2 className="text-3xl font-bold text-center mb-4">STAY LIKE THE STARS</h2>
                <div className="relative">


                    <div
                        ref={rowRef}
                        className="flex space-x-4 overflow-x-auto scrollbar-hide"
                    >
                        {stays.map((stay, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg shadow-md p-4 min-w-[250px] flex flex-col items-center"
                            >
                                <img
                                    src={stay.img}
                                    alt={stay.name}
                                    className="h-40 w-full object-cover rounded"
                                />
                                <h3 className="mt-2 font-semibold">{stay.name}</h3>
                                <p className="text-gray-600">Stayed at: {stay.stayedAt}</p>
                                <button className="mt-3 bg-black text-white px-4 py-2 rounded focus:outline-none">
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="tarun w-full  text-black font-bold overflow-hidden">
                <div className="whitespace-nowrap animate-marquee py-2">
                    <span className="mx-8">3L+ Happy Guests</span>
                    <span className="mx-8">Awarded Favorite Villa Rental</span>
                    <span className="mx-8">1000+ Handpicked Villas</span>
                    <span className="mx-8">Experience Luxurious Stays!</span>
                    <span className="mx-8">Plan Your Perfect Getaway!</span>
                    <span className="mx-8">Discover Unforgettable Memories!</span>
                </div>
            </div>


        </>
    );
};

export default Stars;
