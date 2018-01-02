import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Introducation from './Introducation';
import Reason from './Reason'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Modal from './components/Modal'
// import './navbar-hidden';
import { throttle } from 'lodash';
import 'intersection-observer';
import PropTypes from 'prop-types';
class App extends Component {
  state = {
    data: {},
    isNavbarToggle: false
  }

  static childContextTypes = {
    observer: PropTypes.object
  }

  getChildContext() {
    return {
      observer: this.observer
    }
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const { target: img } = entry;
      img.src = img.dataset.src;
      img.onerror = this.observer.unobserve(img);
      img.onload = () => {
        this.observer.unobserve(img);
      }
    });
  })

  togglePointerEvent = throttle((() => {
    let timer;
    return () => {
      clearTimeout(timer);
      document.body.style.pointerEvents = 'none';
      timer = setTimeout(() => document.body.style.pointerEvents = 'auto', 100);
    }
  })(), 250)

  componentDidMount () {
    import('./articles.js').then(({ default: data }) => {
      this.setState({ data })
    });
    window.addEventListener('scroll', this.togglePointerEvent);
  }

  componentWillUnmount() {
    this.observer.disconnect();
    window.removeEventListener('scroll', this.togglePointerEvent);
  }

  onToggleNavbar = () => {
    this.setState(({ isNavbarToggle }) => ({
      isNavbarToggle: !isNavbarToggle,
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
      <BrowserRouter >
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
          <main style={this.pushdown(isNavbarToggle)}>
            <Switch>
              <Route path="/reason" component={Reason}/>
              <Route path="/" render={
                () => <Introducation {...data} />
              } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
