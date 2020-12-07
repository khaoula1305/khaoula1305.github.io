import React, { Component } from 'react';
import ContactForm from './ContactForm';
class Contact extends Component {
render() {
    const styles={
        textAlign:'center',
    }
return (
       <div className="section" id="contact" >
                <h2 className="section-title">Contact Me</h2>
                <div className=" bd-grid"> 
                <h6 style={styles}>Please feel free to contact me for any constructive comments or suggestions or collaboration. </h6>
				<ContactForm/>
</div>
</div>
)
}
}
export default Contact
