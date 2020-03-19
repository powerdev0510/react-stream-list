import React, { Component } from 'react';

class ContentHeader extends Component {
    state = {
        title: this.props.title
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="contentHeader">
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}

export default ContentHeader;