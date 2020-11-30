import React, { Component } from 'react';
import ProjetItem from './ProjetItem';
import "./project.css";



class Projects extends Component {
    state = {}


    render() {
        let projects =this.props.projects;
        return (
            <div className="condiv">
            <div className="conatiner">
                <div className="wrap">
                    {
                        projects.map( project=>(
                       <ProjetItem key={project.id} projet={project} />)
                    )}

                </div>
            </div>
        </div>);
    }
}
 
export default Projects;
