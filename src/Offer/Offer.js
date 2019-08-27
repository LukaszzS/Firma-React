import React from 'react';
import './Offer.css';

class Offer extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
        <section id="offer">
    <div className="container">
        <h1> Czym zajmuje się nasza firma?</h1>
        <div className="box-offer">
            <div className="box-new">
                <div className="box-content">
                    Usługa 1 <span>(nowość)</span>
                </div>
            </div>

            <div>
                <div className="box-content">
                    Usługa 2
                </div>
            </div>

            <div>
                <div className="box-content">
                    Usługa 3
                </div>
            </div>

            <div>
                <div className="box-content">
                    Usługa 4
                </div>
            </div>

            <div>
                <div className="box-content">
                    Usługa 5
                </div>
            </div>

            <div>
                <div className="box-content">
                    Usługa 6
                </div>
            </div>
        </div>
    </div>
</section>
        );
    }
}

export default Offer;