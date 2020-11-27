import React, { Component } from 'react';
import profilepic from '../img/BenchariKhaoula.png';
import Social from '../components/Social';
import Header from '../components/Header';

class Home extends Component {
    render() {
        return (
            <Header>
                <div className="condiv home">
                    <img src={profilepic} alt="me" className="profilepic"></img>
                    <h1> Hi I'am Benchari Khaoula</h1>
                    <p>Software engineer</p>
                    <Social socials={this.props.socials} />
                    <h6>
                        Please feel free to contact me for any constructive comment or suggestion or collaboration </h6>
                </div>
                </Header>
        )
    }
}
export default Home;