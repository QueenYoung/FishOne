import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="app">
          <Route path="/" component={Navbar}/>
          <Route
            path="/profile"
            render={({ history }) => (
              <Modal history={history}>
                <Profile />
              </Modal>
            )}
          />
        </main>
      </BrowserRouter>
    )
  }
}

export default App
