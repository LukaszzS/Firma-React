import React from 'react';
import LandingpageFoto from './img/nav-fota.jpg';
import './App.css';
import Nav from './Nav/Nav';
import Landingpage from './Landingpage/Landingpage';
import About from './About/About';
import Offer from './Offer/Offer';
import Footer from './Footer/Footer';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

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
