import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"


class Footer extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
        <footer>
    <div className="container footer-container">
        <h2>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</h2>
        <div className="social-container">
        <FontAwesomeIcon icon={ faInstagram } href="https://www.instagram.com/" target="_blank"/>
        <FontAwesomeIcon icon={faFacebookSquare} href="https://www.facebook.com/" target="_blank" />
        </div>
    </div>
</footer>
        );
    }
}

export default Footer;