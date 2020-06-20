import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"
import UsersListPage from './pages/UsersListPage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <div style={{backgroundColor: '#E5E5E5', height: '100%'}}>
      <Switch>
        <Route exact path="/" component={UsersListPage} />
        <Route path="/users/:username" component={UserPage} />
      </Switch>
    </div>
  )
}

export default App
