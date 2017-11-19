import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Introducation from './Introducation';
import Reason from './Reason'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Modal from './components/Modal'
import Image from './components/Image'

class App extends Component {
  state = {
    data: {},
    isNavbarToggle: false
  }
  componentWillMount () {
    import('./articles.js').then(({ default: data }) => {
      this.setState({ data })
    })
  }

  onToggleNavbar = () => {
    this.setState(prev => ({
      isNavbarToggle: !prev.isNavbarToggle
    }))
  }

  pushdown = (isToggle) => {
    if (!isToggle) {
      return {
        transform: 'translateY(0)'
      }
    }
    const height = document.querySelector('nav.navbar').offsetHeight
    return {
      transform: `translateY(calc(${height}px + 3.25rem))`
    }
  }
  render () {
    const { state: { data, isNavbarToggle } } = this
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar onClick={this.onToggleNavbar} isToggle={isNavbarToggle}/>
          <Route
            path="/profile"
            render={({ history }) => (
              <Modal history={history}>
                <Profile />
              </Modal>
            )}
          />
          <Route
            path='/static/media/:src'
            render={({ history, match }) => (
              <Modal history={history}>
                <Image
                  src={match.params.src}
                />
              </Modal>
            )}
          />
          <main style={this.pushdown(isNavbarToggle)}>
            <Switch>
              <Route path="/reason" component={Reason}/>
              <Route path="/" render={
                () => <Introducation {...data}/>
              } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
