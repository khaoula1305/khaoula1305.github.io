import React, { Component } from 'react';
import ProjetItem from './ProjetItem';
import "./project.css";



class Projects extends Component {
    state = {}
    render() {
        let projects =this.props.projects;
        return (
               <div className="work section" id="projects">
                <h2 className="section-title">Projects</h2>
                <div className="bd-grid work__container">
                    {
                        projects.map( project=>(
                       <ProjetItem key={project.id} projet={project} />)
                    )}
            </div>
                  </div>
            );
    }
}
 
export default Projects;
