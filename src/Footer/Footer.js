import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircel} from '@fortawesome/free-regular-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';



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
        <FontAwesomeIcon icon="coffee" />
            <a className="fab fa-instagram fa-2x" href="https://www.instagram.com/" target="_blank"></a>
            <a className="fab fa-facebook-square fa-2x" href="https://www.facebook.com/" target="_blank"></a>
        </div>
    </div>
</footer>
        );
    }
}

export default Footer;