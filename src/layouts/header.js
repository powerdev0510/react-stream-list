import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
function Header() {
    return(
        <Router>
            <div className="header">
                <div>
                    <Link to='/'>DEMO Streaming</Link>
                </div>
                <div>
                    <span>Log in</span>
                    <span className="freeTrial">Start your free trial</span>
                </div>
            </div>
        </Router>
    );
}

export default Header;