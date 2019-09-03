import React from 'react';
import './Offer.css';
import Box from './Box/Box';

class Offer extends React.Component{
constructor(props) {
    super(props);
this.offers = [
    {
        name: 'Oferta 1',
        isNew: true,
    },
    {
        name: 'Oferta 2',
        isNew: false,
    },
    {
        name: 'Oferta 3',
        isNew: true,
    },
    {
        name: 'Oferta 4',
        isNew: true,
    },
    {
        name: 'Oferta 5',
        isNew: false,
    },
    {
        name: 'Oferta 6',
        isNew: false,
    },
]
}


render () {
    return (
        <section id="offer">
            <div className="container">
                <h1> Czym zajmuje się nasza firma?</h1>
                <div className="box-offer">
                    {
                        this.offers.map((o)=> {
                            return <Box box={o}></Box>
                        })
                    }
                </div>
            </div>
        </section>
        );
    }
}

export default Offer;