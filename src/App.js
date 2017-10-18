import React, { Component } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.addOneToAll = this.addOneToAll.bind(this)
    this.resetAddOneProp = this.resetAddOneProp.bind(this)

    this.state = {
      addOne: false
    }
  }

  updateAddOneProp (update) {
    this.setState({
      addOne: update
    })
  }

  addOneToAll () {
    this.updateAddOneProp(true)
    setTimeout(this.resetAddOneProp, 0)
  }

  resetAddOneProp () {
    this.updateAddOneProp(false)
  }

  render () {

    return (
      <div className='main'>
        <Counter addOne={this.state.addOne}/>
        <Counter addOne={this.state.addOne}/>
        <Counter addOne={this.state.addOne}/>
        <Button clickHandler={this.addOneToAll}>
          Add +1 to all
        </Button>
      </div>
    )
  }
}

export default App
