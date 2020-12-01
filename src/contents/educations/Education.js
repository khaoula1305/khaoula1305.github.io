import React, { Component } from 'react';
import Item from "./Item";

class Education extends Component {


    render() { 
        let educations =this.props.educations;
        return ( 
            <div className="section" id="education">
                <h2 className="section-title">Education</h2>
                <div className="bd-grid">
                {educations.map( school => (
                    <Item key={school.id} school={school}/>
                    )
                    )}
                </div>
            </div>
         );
    }
}
 
export default Education;
