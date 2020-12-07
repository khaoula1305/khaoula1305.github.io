import React, { Component } from 'react';
import Social from '../components/Social';
import profilepic from '../img/Benchari.png';

class Home extends Component {
    render() {
        return (
    <React.Fragment>
        <div  className="home bd-grid" id="home">
<div className="home__data">
                    <h3 className="home__title"> <span className="home__title-color">Benchari Khaoula</span><br/> 
                    I'am a Software Engineer</h3>
                    <a href="#contact" className="button">Contact</a>
                </div>

                <div className="home__social">
                   <Social/>
                </div>
        </div>
        
    
    </React.Fragment>
        );
    }
}
export default Home;
