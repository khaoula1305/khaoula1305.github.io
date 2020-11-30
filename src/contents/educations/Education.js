import React, { Component } from 'react';
import Item from "./Item";

class Education extends Component {


    render() { 
        let educations =this.props.educations;
        return ( 
            <div className="condiv">
                <h1>My studies</h1>
                {educations.map( school => (
                    <Item key={school.id} school={school}/>
                    )
                    )}
            </div>
         );
    }
}
 
export default Education;
