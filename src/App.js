// import React from 'react'
// import './App.css'
// import Navbar from './Components/Navbar'
// import Destinations from './Components/Destinations'
// import TrendingSlider from './Components/TrendingSlider'
// import BestRated from './Components/BestRated'
// import Offers from './Components/Offers'
// import Collection from './Components/Collection'
// import Stars from './Components/Stars'
// import Footer from './Components/Footer'
// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Destinations />
//     <TrendingSlider title={"Trending This Season"} />
//     <Collection/>
//     <BestRated />
//     <Offers/>
//     <Stars/>
//     <Footer/>
//     </>
//   )
// }
// export default App


import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Destinations from './Components/Destinations';
import TrendingSlider from './Components/TrendingSlider';
import Collection from './Components/Collection';
import BestRated from './Components/BestRated';
import Offers from './Components/Offers';
import Stars from './Components/Stars';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <main className="pt-16 deep"> {/* Padding to account for the fixed navbar */}
                <Destinations />
                <TrendingSlider title={"Trending This Season"} />
                <Collection />
                <BestRated />
                <Offers />
                <Stars />
            </main>
            <Footer />
        </>
    );
}

export default App;

