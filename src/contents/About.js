import React, { Component } from 'react';
import Header from '../components/Header';
import profilepic from '../img/BenchariKhaoula.png';
import '../css/main.css';

class About extends Component {
	render() {
		return (
			<Header>
				<section id="banner">
					<div className="content">
						<header>
						<h1> Hi I'am Benchari Khaoula</h1>
						</header>
						<p>
							I am a <strong>software engineer</strong>.
							 I am actively looking for a graduation internship. I'm interested about JavaScript frameworks and Java frameworks, and i'm passionate about working on source code.
						</p>
						</div>
					 <img src={profilepic} alt="me" className="profilepic"></img>
				</section>
			</Header>

		)
	}

}


export default About;