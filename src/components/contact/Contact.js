import React, { Component } from 'react';
import ContactForm from './ContactForm';
class Contact extends Component {
render() {
return (
       <div className="section" id="contact" >
                <h2 className="section-title">Contact Me</h2>

                <div className=" bd-grid"> 
                <p>Please feel free to contact me for any constructive comment or suggestion or collaboration. </p>
				<ContactForm/>
</div>


</div>
)
}
}
export default Contact