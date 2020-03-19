import React from 'react';
import {
	Link
} from 'react-router-dom';
function Header() {
    return(
        <div className="header">
            <div>
                <Link to='/'>DEMO Streaming</Link>
            </div>
            <div>
                <span>Log in</span>
                <span className="freeTrial">Start your free trial</span>
            </div>
        </div>
    );
}

export default Header;