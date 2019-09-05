import React from 'react';
import './Box.css';

class Box extends React.Component{
constructor(props) {
    super(props);
    console.log(props);

}
displayNewText(){
    if (this.props.box.isNew) return <span>(nowość)</span>
}
displayNewDot(){
    console.log(this.props.box);
if (this.props.box.isNew) { return <div className="box-dot"></div> }
}
render () {
    return (
            <div className="box-new">
                <div className="box-content">{this.props.box.name}
                {this.displayNewText()}
                </div>
                {this.displayNewDot()}
            </div>
        );
    }
}

export default Box;