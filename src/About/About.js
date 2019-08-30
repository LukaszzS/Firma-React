import React from 'react';
import './About.css';
import emp1 from '../img/foto1.jpg';
import emp2 from '../img/about-foto2.jpg';
import emp3 from '../img/about-foto1.jpg';
import Employee from './Employee/Employee';

class About extends React.Component{
constructor(props) {
    super(props);

    this.employees = [
        {
          name: "Grzegorz Wąs",
          pic: emp1  
        },
        {
            name: "Zygfryda Paździerz",
            pic: emp2
        },
        {
            name: "Wanda Nierusz",
            pic: emp3
        }

    ]
}
render () {
    return (
        <section id="about">
            <div className="container">
                 <h1>Nasi specjaliści</h1>
                  {this.employees.map((emp, i) => {
                    return <Employee employee={emp} key={i}></Employee>
                  })}
            </div>
        </section>
        );
    }
}

export default About;