import React from 'react';
import './About.css';

class About extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
        <section id="about">
            <div className="container">
                 <h1>Nasi specjaliści</h1>
                    <div className="about-person">
                    <div className="about-foto first"></div>
                        <h2>
                        <span>Imię Nazwisko [ dział ]</span>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                        b eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                         nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                         </h2>
                     </div>
                 <div className="about-person">
                     <div className="about-foto second"></div>
                         <h2>
                             <span>Imię Nazwisko [ dział ]</span>Lorem ipsum dolor sit amet, consectetur adipisicing
                         elit, sed do
                         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                         nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                        </h2>
                </div>

            </div>
        </section>
        );
    }
}

export default About;