import React, { Component } from 'react'

export default class AuthPage extends Component {
    render() {
        return (
            <div>
                
                <form>

                    {/* Login input and button.  */}
                    <label> 
                        <input onChange={this.handleLoginChange}/> 
                        <button>Login!</button>
                    </label>

                    {/* Signup input and button.  */}
                    <label> 
                        <input onChange={this.handleSignupChange}/> 
                        <button>Signup!</button>
                    </label>

                </form>
                
                


                {/* Once Logged in, the user token should be stored in state and passed down throughout the app so it can be used to make fetch calls. */}



            </div>
        )
    }
}
