import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage.js'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';



  export default class App extends Component {
    render() {
        return (
            <>
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        {/* <Route 
                            path="/pokedex/pokemon/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        /> */}
                    </Switch>
                </Router>
            </div>
            </>
        )
    }
}