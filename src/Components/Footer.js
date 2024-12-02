import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white p-8">
            <h2 className="mb-9 text-2xl font-bold mb-4 text-center">Popular Destinations to Rent a Holiday Home in India</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h3 className="font-semibold mb-2">Villas</h3>
                    <ul>
                        <li>Villas in Goa</li>
                        <li>Villas in Lonavala</li>
                        <li>Villas in Alibaug</li>
                        <li>Villas in Karjat</li>
                        <li>Villas in Igatpuri</li>
                        <li>Villas in Mahabaleshwar</li>
                        <li>Villas in Mumbai</li>
                        <li>Villas in Bangalore</li>
                        <li>Villas in Udaipur</li>
                        <li>Villas in Nashik</li>
                        <li>
                            <a href="#" className="text-blue-400">+ 32 more</a>
                        </li>
                    </ul>
                </div>
               
                <div>
                    <h3 className="font-semibold mb-2">Cottages</h3>
                    <ul>
                        <li>Cottages in Chandigarh</li>
                        <li>Cottages in Naldehra</li>
                        <li>Cottages in Arambol</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Homestays</h3>
                    <ul>
                        <li>Homestays in Kasauli</li>
                        <li>Homestays in Mussoorie</li>
                        <li>Homestays in Ooty</li>
                        <li>Homestays in Manali</li>
                        <li>Homestays in Nainital</li>
                        <li>Homestays in Wayanad</li>
                        <li>Homestays in Kodaikanal</li>
                        <li>Homestays in Jim Corbett</li>
                        <li>Homestays in Pondicherry</li>
                        <li>Homestays in Coorg</li>
                        <li>
                            <a href="#" className="text-blue-400">+ 43 more</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Places To Visit</h3>
                    <ul>
                        <li>Places To Visit in Alibaug</li>
                        <li>Places To Visit in Mussoorie</li>
                        <li>Places To Visit in Coorg</li>
                        <li>Places To Visit in Kasauli</li>
                        <li>Places To Visit in Karjat</li>
                        <li>Places To Visit in Goa</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p>
                    <a href="#" className="text-gray-400">Privacy</a> &bull;
                    <a href="#" className="text-gray-400"> Terms & Conditions</a> &bull;
                    <a href="#" className="text-gray-400"> Sitemap</a> &bull;
                    <span className="ml-2">Call Us: +91 8104 954 254</span>
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-400">Facebook</a>
                    <a href="#" className="text-gray-400">Instagram</a>
                    <a href="#" className="text-gray-400">YouTube</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
