import React, { Component } from 'react'

export default class AuthPage extends Component {
    render() {
        return (
            <div>
                This page should let the user log in or sign up. 
                Once logged in, the user token should be stored in state and passed down throughout the app so it can be used to make fetch calls.
            </div>
        )
    }
}
