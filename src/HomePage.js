import './App.css';
import React, { Component } from 'react'
import AuthPage from './AuthPage.js'
import ListPage from './ListPage.js'

export default class HomePage extends Component {
    
    state = {
        todos: [
            {
            id: 1,
            name: 'dishes',
            minutes_to_do: 5,
            completed: false
            },
            {
            id: 2,
            name: 'pay cable bill',
            minutes_to_do: 3,
            completed: false
            },
            {
            id: 3,
            name: 'feed kitties',
            minutes_to_do: 2,
            completed: true
            }], 
        newTodo: ''
    }  

  render() {
      console.log('hello', this.state.todos);
    return (
        <>
        <div> 
            <ListPage />
        </div>
        
        <ul>
            {this.state.todos.map(task => 
             <li key={JSON.stringify(task)}> 
                {task.name}
             </li>)}
        
        </ul>

        <div>
          <AuthPage /> 
        </div>
      </>
    )
  }
}
