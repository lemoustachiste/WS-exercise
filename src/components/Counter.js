import React, { PureComponent } from 'react'
import Receiver from './Receiver'
import Control from './Control'

class Counter extends PureComponent {
    constructor () {
        super()
        this.addOneHandler = this.addOneHandler.bind(this)
        this.substractOneHandler = this.substractOneHandler.bind(this)

        this.state = {
          counter: 0
        }
    }

    addOneHandler () {
        let { counter } = this.state
        counter++
        this.setState({
          counter
        })
    }

    substractOneHandler () {
        let { counter } = this.state
        counter--
        this.setState({
          counter
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addOne) {
            this.addOneHandler()
        }
    }

    render() {
        return (
          <div className='counter'>
            <Receiver className='counter__panel' number={this.state.counter} />
            <Control
              className='counter__panel'
              onAddOne={this.addOneHandler}
              onSubstractOne={this.substractOneHandler}
            />
          </div>
        )
    }
}

export default Counter
