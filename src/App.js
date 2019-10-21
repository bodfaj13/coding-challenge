import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
// import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newInput: null
    }
  }

  addInputs = (inputs) => {
    this.setState({
      newInput: inputs
    })
  }

  render() {
    const { newInput } = this.state
    return (
      <div className="App">
        <Header addInputs={this.addInputs} />
        <Main newInput={newInput}/>
      </div>
    )
  }
}

export default App