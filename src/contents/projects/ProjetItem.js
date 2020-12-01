import React, { Component } from 'react';
import "./project.css";
import { GitHub, Launch} from "@material-ui/icons";
import {  IconButton} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjetItem extends Component {
    render() {
        const {name, description, url, imgurl,date, languages,github}=this.props.projet;
        return (
<div className="box mybox" >
            
            <div>
                <img src={imgurl}  alt="myPhoto"/>
                <div className="date">
                <h4>{date}</h4>
            </div>
            </div>
            <div className="text">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div>
                {languages.map(item => <span key={item.id} className="badge badge-primary myspan">{item.skillname}</span> )}
            </div>
            <div className="myIcon">
                <IconButton
                    title="Launch App"
                    aria-label="Launch Application"
                    href={url}
                >
                    <Launch />
                </IconButton>
                <IconButton
                    title="See Code"
                    aria-label="Source Code On Github"
                    href={github}
                >
                    <GitHub />
                </IconButton>
            </div>
        </div>
            );
    }
}
 
export default ProjetItem;
