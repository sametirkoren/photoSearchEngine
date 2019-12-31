import React, { Component } from 'react'
import './Main.css';
export default class Main extends Component {
    constructor(){
        super();
        this.state = {};
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.state !== undefined && nextProps.location.state.aramaMetni !== this.state.aramaMetni){
            this.setState({aramaMetni : nextProps.location.state.aramaMetni});
        }
    }
    render() {
        return (
            <div className="main" >
                {this.state.aramaMetni ? (`Aranan Kelime : ${this.state.aramaMetni}`) : ""}
            </div>
        )
    }
}
