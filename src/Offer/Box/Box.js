import React from 'react';
import './Box.css';

class Box extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}


render () {
    return (
            <div className="box-new">
                <div className="box-content">
                    Usługa 1 <span>(nowość)</span>
                </div>
            </div>
        );
    }
}

export default Box;