import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'

import Login from '../Components/Login'
import Register from '../Components/Register'


export default class Routes extends Component {
    render() {
        return (
            <>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <Route  exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                </div>
                <div>
                    <Route path='/dashboard' render={()=><Dashboard />} />
                </div>
            </>
        )
    }
}
