import React from 'react';
import './Footer.css';

class Footer extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
        <footer>
    <div class="container footer-container">
        <h2>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</h2>
        <div class="social-container">
            <a class="fab fa-instagram fa-2x" href="https://www.instagram.com/" target="_blank"></a>
            <a class="fab fa-facebook-square fa-2x" href="https://www.facebook.com/" target="_blank"></a>
        </div>
    </div>
</footer>
        );
    }
}

export default Footer;