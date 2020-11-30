import React, {Component} from "react";

class Item extends Component{

    render() {
        const {UniversityName,specialization,Year1,Year2}=this.props.school;
        return(
            <div className="box mybox">
                <div className="date">
                    <h4>{Year1}-{Year2}</h4>
                </div>
                <div className="text">
                    <h3>{UniversityName}</h3>
                    <p>{specialization}</p>
                </div>
            </div>
        )
    }
}

export default Item;
