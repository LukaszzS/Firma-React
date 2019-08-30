import React from 'react';
import LandingpageFoto from './img/nav-fota.jpg';
import './App.css';
import Nav from './Nav/Nav';
import Landingpage from './Landingpage/Landingpage';
import About from './About/About';
import Offer from './Offer/Offer';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
    <Nav></Nav>
    <Landingpage></Landingpage>
    <About></About>
    <Offer></Offer>
    <Footer></Footer>
    </>
  );
}

export default App;
