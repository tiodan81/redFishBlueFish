// @flow
import React, { Component } from 'react'
import request from './lib/request'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      products: []
    }
  }

  getProducts = () => {
    request('/products')
    .then(response => {
      console.log(response)
    })
  }

  componentWillMount() {
    this.getProducts()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
