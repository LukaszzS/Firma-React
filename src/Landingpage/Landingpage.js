import React from 'react';
import './Landingpage.css';

class Landingpage extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
        <section id="landingpage">
            <div className="landingpage-shadow">
                <div className="container landingpage-container">
                    <div className="landingpage-text">
                    <h1>Nasza firma oferuje najwyższej jakości produkty</h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>
                    <a href="#offer">
                    <button className="btn">oferta</button>
                    </a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Landingpage;