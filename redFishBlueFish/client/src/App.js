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
      </div>
    )
  }
}

export default App
