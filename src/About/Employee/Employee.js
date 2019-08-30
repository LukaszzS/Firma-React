import React from 'react';
import './Employee.css';
// import image from '../../img/foto1.jpg';

class Employee extends React.Component{
constructor(props) {
    super(props);
    console.log(props);
}

render () {
    return (
        <div className="about-person">
            {/* <div className="about-foto first"></div> */}
            <img src= {this.props.employee.pic} alt="Employee foto"></img>
             <h2>
             <span>{this.props.employee.name} [ dział ]
                </span>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do
                b eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
             </h2>
        </div>
    );
    }
}

export default Employee;