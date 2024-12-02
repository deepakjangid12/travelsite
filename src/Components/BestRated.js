import React, { useState } from 'react';
import TrendingSlider from './TrendingSlider';

const tabs = ['All', 'Lonavala', 'Alibaug', 'Goa', 'Shimla', 'Manali', 'Coorg', 'Explore more'];

const BestRatedTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]); 

    return (
        <>
        <div className="p-4 md:p-6">
            <h2 className="text-2xl font-bold">Best Rated</h2>
            <div className="mt-4 flex flex-wrap space-x-2 space-y-2 overflow-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 rounded-lg border transition duration-300 ${
                            activeTab === tab
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'border-gray-300 text-gray-700'
                        }`}
                        style={{ minWidth: '100px' }} 
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
        <div>
            <TrendingSlider/>
        </div>
        </>
    );
};

export default BestRatedTabs;
