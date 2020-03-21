import React, { Component} from 'react';

class Card extends Component {
    state = {
        img: '',
        title: '',
        alt: '',
    }
    constructor(props) {
        super(props);
        this.setState({
            img: this.props.img,
            title: this.props.title,
            alt: this.props.alt
        })
    }
    render() {
        return (
            <div className='item'>
                <img src={this.state.img} alt={this.state.alt} />
                <span>{this.state.title}</span>
            </div>
        );
    }
}

export default Card;
