// @flow
import Header from './Header.js'
import Products from './Products.js'
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
      this.setState({ loading: false, products: response })
    })
  }

  componentWillMount() {
    this.getProducts()
  }

  render() {
    const {loading, products} = this.state

    if (loading) {
      return (
        <div>hold on</div>
      )
    }
    return (
      <div className="App">
        <Header />
        <main className="main-content">
          <Products products={products} />
        </main>
      </div>
    )
  }
}

export default App
