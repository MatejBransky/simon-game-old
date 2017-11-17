import React, { Component } from 'react'
import './App.css'
import {
  ColorButton,
  Panel,
  Display,
  StartButton,
  StrictButton,
  PowerSwitch
} from './Components'

class App extends Component {
  state = {
    power: false,
    start: false,
    strict: false,
    display: {
      status: false,
      content: ''
    }
  }

  render() {
    const { power, strict, display } = this.state
    return (
      <div className="App">
        <div className="Game">
          <ColorButton color="green" position="top-left" />
          <ColorButton color="red" position="top-right" />
          <ColorButton color="yellow" position="bottom-left" />
          <ColorButton color="blue" position="bottom-right" />
          <Panel>
            <h1>Simon</h1>
            <Display status={display.status}>
              {display.content}
            </Display>
            <StartButton />
            <StrictButton strict={strict} />
            <PowerSwitch power={power} />
          </Panel>
        </div>
      </div>
    )
  }
}

export default App
