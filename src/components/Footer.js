import React, { Component } from 'react';
import Social from './Social';

class Footer extends Component {
    render() { 
        return (
            <footer class="footer">
            <p class="footer__title">khaoula1305</p>
            <div class="footer__social">
                <Social/>
            </div>
                {//<p>&#169; 2020 copyright all right reserved</p>
                     }
        </footer>

 );
    }
}
 
export default Footer;
