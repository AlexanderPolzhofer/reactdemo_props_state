import React, { Component } from 'react';
import styleVote from './Vote.module.css';

class Vote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            mouseOverCount: 0
        }

    }

    voted = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    mouseOver = () => {
        this.setState({ mouseOverCount: this.state.mouseOverCount + 1 })
    }

    render() {
        return (
            <div onClick={this.voted} className={styleVote.wrapper} onMouseOver={this.mouseOver}>
                <div className={styleVote.containerCard}>
                    <h2>Name: {this.props.candidate}</h2>
                    <h2>Country: {this.props.country}</h2>
                    <h3>Nr.: {this.state.counter}</h3>
                    <p>{this.state.mouseOverCount}</p>
                </div>
            </div>
        )
    }
}

export default Vote;