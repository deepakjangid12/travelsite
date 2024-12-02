import React, { useRef } from 'react';

const offers = [
    {
        code: 'NEWLYLAUNCHED',
        description: 'Use the code NEWLYLAUNCHED on our recently launched vistas, and get a flat 15% off, up to Rs. 3,000.',
        expiry: 'Expires December 20, 2024',
        type: 'new',
    },
    {
        code: 'ESCAPE2024',
        description: 'Get 10% OFF upto 1500 on your next getaway!',
        expiry: 'Expires December 20, 2024',
        type: 'discount',
    },
    {
        code: 'VISTA2024',
        description: 'Book a holiday for a minimum of 3 nights and get an instant discount of up to 10%*',
        expiry: 'Expires December 20, 2024',
        type: 'promo',
    },
    {
        code: 'MIDWEEK30',
        description: 'Use code MIDWEEK30 for an additional 30% off on mid-week stays!',
        expiry: 'Expires December 20, 2024',
        type: 'discount',
    },
    {
        code: 'FESTIVE2024',
        description: 'Get a festive offer of 20% off on holiday bookings made in December!',
        expiry: 'Expires December 20, 2024',
        type: 'festival',
    },
    {
        code: 'SUMMER2024',
        description: 'Use S34MMER2024 to get big savings this summer!',
        expiry: 'Expires June 20, 2024',
        type: 'summer',
    },
    {
        code: 'WINTER2024',
        description: 'Enjoy winter holidays with 15% off using code WINTER2024.',
        expiry: 'Expires January 30, 2024',
        type: 'winter',
    },
    {
        code: 'TRAVEL2024',
        description: 'Travel this year and get 10% off on your bookings.',
        expiry: 'Expires December 31, 2024',
        type: 'travel',
    },
    {
        code: 'SPRING2024',
        description: 'Spring is here! Get a 25% discount using SPRING2024.',
        expiry: 'Expires March 31, 2024',
        type: 'spring',
    },
    {
        code: 'LOYALTY2024',
        description: 'Special 15% discount for our loyal customers with code LOYALTY2024.',
        expiry: 'Expires December 31, 2024',
        type: 'loyalty',
    },
];

const OffersSlider = () => {
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
        <>
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-4">OFFERS FOR YOU</h2>
            <div className="relative">
               

                <div
                    ref={rowRef}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide"
                >
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className={`relative rounded-lg shadow-md border border-gray-200 p-4 min-w-[285px] h-[220px] flex flex-col justify-between ${
                                offer.type === 'new' ? 'bg-red-100' : offer.type === 'discount' ? 'bg-blue-100' : 'bg-yellow-100'
                            }`}
                        >
                            <div>
                                <p className="text-lg font-semibold">{offer.description}</p>
                                <p className="text-xs text-gray-500">{offer.expiry}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold">{offer.code}</span>
                                <button className="border border-gray-300 rounded px-2 py-1">Copy Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 text-center">
                <button className="border border-black text-black rounded px-4 py-2">
                    See All Offers
                </button>
            </div>
            
        </div>
       
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-purple-100 p-4 md:p-6 rounded-lg">
  <div className="mb-4 md:mb-0 md:w-1/2">
    <h2 className="text-xl md:text-lg font-bold">LIST YOUR PROPERTY WITH US!</h2>
    <p className="text-gray-700 text-base md:text-sm">
      Join our network of 1000+ happy owners and turn your property into a high-revenue holiday destination!
    </p>
  </div>
  <button className="bg-black text-white px-6 py-2 rounded focus:outline-none hover:opacity-80 md:w-auto w-full">
    List Now
  </button>
</div>

        </>
    );
};

export default OffersSlider;
