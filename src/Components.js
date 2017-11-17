import React from 'react'
import './Components.css'

const ColorButton = ({ color, position }) => (
  <button className={`ColorButton--${color} ColorButton--position`}>
    &nbsp;
  </button>
)

const Panel = ({ children }) => <div className="Panel">{children}</div>

const Display = ({ status, children }) => (
  <div className={'Display ' + status ? 'Display--on' : 'Display--off'}>
    {children}
  </div>
)

const StartButton = () => (
  <div className="StartButton">
    <button className="StartButton__button">&nbsp;</button>
    <div className="StartButton__title">Start</div>
  </div>
)

const StrictButton = ({ strict }) => (
  <div className="StrictButton">
    <button className="StrictButton__button">&nbsp;</button>
    <div className="StrictButton__title">Strict</div>
  </div>
)

const PowerSwitch = ({ power }) => (
  <div className="PowerSwitch">
    <div className="PowerSwitch__text-left">Off</div>
    <div className="PowerSwitch__case">
      <div className="PowerSwitch__button" />
    </div>
    <div className="PowerSwitch__text-right">On</div>
  </div>
)

export {
  ColorButton,
  Panel,
  Display,
  StartButton,
  StrictButton,
  PowerSwitch
}
