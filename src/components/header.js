import React from 'react';

function Header() {
    return(
        <div className="header">
            <div>
                <h1>DEMO Streaming</h1>
            </div>
            <div>
                <span>Log in</span>
                <span className="freeTrial">Start your free trial</span>
            </div>
        </div>
    );
}

export default Header;