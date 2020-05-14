import React, { Component } from 'react'

export default class ListPage extends Component {

    state = { 
        newToDo: ''
    }

    handleAddChange = async (e) => {
        await this.setState({ newToDo: e.target.value})
    }

    render() {
        return (
            // console.log('hello', e.target.value); logs out input upon handlechange for add button
            <div>
                

                <form>

                    {/* Add Button and Input for Add  */}
                    <label> 
                        <input value={this.state.newToDo} onChange={this.handleAddChange}/> 
                        <button>Add a New Todo!</button>
                    </label>

                </form>
                
                {/* A list page of all the todos for the user */}

                {/* A way to complete a to do */}
                    {/* Maybe a checkbox? */}
                
                {/* The list should update without a hard refresh when a todo is added or completed. */}
            </div>
        )
    }
}
