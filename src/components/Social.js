import React, { Component } from 'react';
class Social extends Component {
render() {
    let socials=this.props.socials;
return (
<div className="social">
<a href="https://codepen.io/khaoula1305" ><i className="fab fa-codepen"></i></a>
<a href="https://github.com/khaoula1305" ><i className="fab fa-github"></i></a>
<a href="https://Instagram.com/khaoula1305" ><i className="fab fa-instagram"></i></a>
<a href="https://www.facebook.com/khaoula1305" ><i className="fab fa-facebook-f"></i></a>
<a href="https://Linkedin.com/in/khaoula1305" ><i className="fab fa-linkedin-in"></i></a>
<a href="https://medium.com/khaoula1305" ><i className="fab fa-medium-m"></i></a>
</div>
)
}
}
export default Social