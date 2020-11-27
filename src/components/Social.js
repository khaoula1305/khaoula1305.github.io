import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
  import EmailIcon from '@material-ui/icons/Email';
class Social extends Component {
render() {
    let socials=this.props.socials;
return (
<div className="social">
<FacebookIcon fontSize='large' href='#'><a href="https://www.facebook.com/khaoula1305" > </a></FacebookIcon>
<LinkedInIcon fontSize='large'></LinkedInIcon>
<WhatsAppIcon fontSize='large' ></WhatsAppIcon>
<EmailIcon fontSize='large' ></EmailIcon>
<GitHubIcon fontSize='large' ></GitHubIcon>

<a href="https://codepen.io/khaoula1305" > </a>
<a href="https://github.com/khaoula1305" > </a>
<a href="https://Instagram.com/khaoula1305" > </a>

<a href="https://Linkedin.com/in/khaoula1305" >   </a>
<a href="https://medium.com/khaoula1305" > </a>
</div>
)
}
}
export default Social