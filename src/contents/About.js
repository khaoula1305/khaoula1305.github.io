import React, { Component } from 'react';
import profilepic from '../img/Benchari.png';

class About extends Component {
	render() {
		return (
		  <div class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src={profilepic} alt="myPhoto"/>
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">Hi I'am Benchari Khaoula</h2>
                        <p class="about__text">I am a software engineer. I am actively looking for a graduation internship. I'm interested about JavaScript frameworks and Java frameworks, and i'm passionate about and i'm passionate about contributing to open source projects.</p>           
                    </div>                                   
                </div>
            </div>

		)
	}

}


export default About;
