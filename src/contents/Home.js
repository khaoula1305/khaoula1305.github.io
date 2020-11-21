import React, { Component } from 'react';
import profilepic from '../img/BenchariKhaoula.png';
import Social from '../components/Social';

class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} alt="me" className="profilepic"></img>
<h1> Hi 'am khaoula</h1>
<Social socials={this.props.socials} />
<h6>b</h6>
</div>
)
}
}
export default Home;