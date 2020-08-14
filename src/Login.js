import React, { Component } from 'react';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

export class Example extends Component {
    sendLogin() {
        console.log("Logging in")
    }

    openPopupbox() {
        const content = (
            <div>
            <p className="login">Please log in!</p>
            <p className="username">Input</p>
            <p className="password">Input</p>
            <button onClick={this.sendLogin}>Click me</button>
            </div>
        )
        if (!this.state.loggedIn()) {
            PopupboxManager.open({ content })
        }
    }

    render() {
        return (
            <div>
            <PopupboxContainer />
            </div>
        )
    }
}
export default Login;