import React, { Component } from 'react';

class Education extends Component {


    render() { 
        let educations =this.props.educations;
        return ( 
            <div className="condiv">
                <h1>My studies</h1>
                {educations.map( e => (<ul key={e}>
                    <li>{e.UniversityName}</li>
                    <li>{e.specialization}</li>
                    </ul>)
                    )}
            </div>
         );
    }
}
 
export default Education;