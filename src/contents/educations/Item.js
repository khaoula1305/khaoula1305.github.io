import React, {Component} from "react";

class Item extends Component{

    render() {
        const {UniversityName,specialization,Year1,Year2}=this.props.school;
        return(
            <div className="card mb-3">
                <div className="row no-gutters">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{UniversityName}</h5>
                            <p className="card-text">{specialization}</p>
                            <p className="card-text"><small className="text-muted">{Year1}-{Year2}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;
