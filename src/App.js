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
    data: {}
  }
  componentWillMount() {
    import('./articles.js').then(({ default: data }) => {
      this.setState({ data })
    })
  }

  render() {
    const { state: { data } } = this
    return (
      <BrowserRouter>
        <main className="app">
          <Navbar/>
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
          <Switch>
            <Route path="/reason" component={Reason}/>
            <Route path="/" render={
              () => <Introducation {...data}/>
            } />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
