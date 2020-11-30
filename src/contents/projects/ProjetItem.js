import React, { Component } from 'react';
import "./project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import img1 from "../../img/portfolio/SmartMind.png";

class ProjetItem extends Component {
    render() {
        const {name, description, url, imgurl,date}=this.props.projet;
        let sectionStyle = {
            //backgroundImage: `url(${img1})`,
            backgroundImage:"url("+ "https://f.hellowork.com/blogdumoderateur/2020/06/apple-macos-big-sur-10-1200x785.jpg"+")"
        };
        return (
            <div className="box mybox" style={sectionStyle} >
            <div className="date">
                <h4>{date}</h4>
            </div>
            <div className="text">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="poster">
                <GitHubIcon ></GitHubIcon>
            </div>
        </div>);
    }
}
 
export default ProjetItem;
