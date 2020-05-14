import React, { Component } from 'react'

export default class ListPage extends Component {
    render() {
        return (
            <div>
                This is the list page. 

                This page should list all todos for a user. 
                There should be a way to add a new todo. 
                There should be some way to 'complete' a todo from this page. 
                The list should update without a hard refresh when a todo is added or completed.
            </div>
        )
    }
}
