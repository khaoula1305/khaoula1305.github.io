import React, { Component } from 'react';

class skillItem extends Component {

    styles={
       marginTop:5,
    }
    render() {
    const { name, image, percentage, imageWidth}=this.props.skill;
        return (
              <div className=" skills__data">
            <div className=" skills__names">
                <img
                    src={image}
                    className="skills__icon"
                    alt="skill carlos"
                    style={{width: imageWidth+'px'}}
                />
                <p className="skills__name" style={this.styles}>
                    {name}
                </p>
            </div>
            <div className="skill-percentage-container">
                <progress value={percentage} max="100" className="skill-percentage" />
            </div>
        </div>

         );
    }
}
 
export default skillItem;
