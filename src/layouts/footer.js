import React from 'react';
import facebook from '../assets/social/facebook-white.svg';
import instagram from '../assets/social/instagram-white.svg';
import twitter from '../assets/social/twitter-white.svg';
import app from '../assets/store/app-store.svg';
import play from '../assets/store/play-store.svg';
import windows from '../assets/store/windows-store.svg';

function Footer() {
    return(
        <div className="footer">
            <div className="menu">
                <a href="/">Home</a> |
                <a href="/">Terms and Conditions</a> |
                <a href="/">Privacy Policy</a> |
                <a href="/">Collection Statement</a> |
                <a href="/">Help</a> |
                <a href="/">Manage Account</a>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2016 DEMO Streaming. All Rights Resereved.</p>
            </div>
            <div className="followus">
                <div className="social">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={instagram} alt="instagram"/>
                </div>
                <div className="store">
                    <img src={app} alt="app"/>
                    <img src={play} alt="play"/>
                    <img src={windows} alt="windows"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;