import React from 'react';
import './Nav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Nav extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
        <nav>
            <div className="container nav-container">
                <a href="#">nazwa firmy</a>
                <ul className="nav--links">
                    <li><a href="#about ">o nas</a></li>
                    <li><a href="#offer">oferta</a></li>
                    <li><a>kontakt</a></li>
                </ul>
                <div className="nav--toggler">
                <FontAwesomeIcon icon={ faBars } />
                </div>
            </div>
        </nav>
        )
    }
}
export default Nav;