import React, { useRef } from 'react';

const collections = [
    {
        title: 'COLDPLAY Concert Stays',
        img: 'https://images.prismic.io/stay-vista/ZvTaQrVsGrYSwA6V_web-6-.jpg',
    },
    {
        title: 'Luxury Villas',
        img: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2FZzYL3a8jQArT04OE_Hero_WEB.jpg%3Fauto%3Dformat%2Ccompress%26rect%3D60%2C0%2C1481%2C600%26w%3D1513%26h%3D613&w=1080&q=75',
    },
    {
        title: 'Unique Vistas Of India',
        img: 'https://images.prismic.io/stay-vista/ZwZUd4F3NbkBXDko_web-7-.jpg',
    },
    {
        title: 'Corporate Offsite Villas',
        img: 'https://img.vistarooms.com/cdn-cgi/image/width=300px/https://images.prismic.io/stay-vista/e42a6e04-59e6-466b-8c61-1003bb7452ad_Corporate+Offsite.jpg?auto=compress,format',
    },
    {
        title: 'Best Rated',
        img: 'https://img.vistarooms.com/cdn-cgi/image/width=300px/https://images.prismic.io/stay-vista/e9fad152-7a22-4cec-bfac-34b12ddd7fc8_Frame+3+%281%29.png?auto=compress,format',
    },
];

const Collection = () => {
    const rowRef = useRef(null);

    const scrollRight = () => {
        rowRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
    };

    const scrollLeft = () => {
        rowRef.current.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-6">CHOOSE A COLLECTION</h2>
            <div className="relative">
                
                <div
                    ref={rowRef}
                    className="flex space-x-2 overflow-x-auto scrollbar-hide"
                >
                    {collections.map((collection, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-md min-w-[270px] h-[200px] flex flex-col justify-end overflow-hidden"
                        >
                            <img
                                src={collection.img}
                                alt={collection.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-white text-lg text-center">
                                {collection.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
