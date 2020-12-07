import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
  import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    clickableIcon: {
        color: 'green',
        '&:hover': {
            color: 'yellow',
        },
    },
}));

class Social extends Component {

    handlePageChange= (url)=> {
        switch (url) {
            case 'github':
                window.location.href = 'https://github.com/khaoula1305';
            // eslint-disable-next-line no-fallthrough
            default : window.location.href = 'https://github.com';
        }
    }
render() {
    let socials=this.props.socials;
    //const classes = useStyles();
return (
<div className="social">
<FacebookIcon fontSize='large'onClick={()=>{window.location.href ='https://www.facebook.com/khaoula1305'}} ></FacebookIcon>
<LinkedInIcon fontSize='large' onClick={()=>{window.location.href ='https://Linkedin.com/in/khaoula1305'}}/>


{/*
<a href="https://codepen.io/khaoula1305" ></a>
  
    <GitHubIcon fontSize='large' onClick={ () => { handlePageChange('github');}}
                className={classes.clickableIcon}/>
*/}
<WhatsAppIcon fontSize='large' />
<EmailIcon fontSize='large' />
<a href="https://Instagram.com/khaoula1305" > </a>

<a href="https://medium.com/khaoula1305" > </a>
</div>
)
}
}
export default Social
