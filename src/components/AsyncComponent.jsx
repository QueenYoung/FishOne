import React, { Component } from 'react';
export default function asyncComponent(importComponent) {
  return class extends Component {
    state = {
      component: null
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const { component: C } = this.state;
      return C ? <C {...this.props} /> : null;
    }
  }
}
