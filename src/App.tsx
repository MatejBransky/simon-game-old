import React, { useRef, createRef, RefObject } from 'react';

import './App.scss';

const App = () => {
  const refs = useRef<RefObject<HTMLButtonElement>[]>(
    [...Array(colors.length)].map(() => createRef())
  );

  return (
    <div className="game">
      <div className="buttons">
        {colors.map((color, index) => (
          <button
            key={color}
            className={color}
            data-testid={`button-${color}`}
            ref={refs.current[index]}
          ></button>
        ))}
      </div>
      <div className="dashboard">
        <h2>Simon</h2>
        <div className="controls">
          <section className="display">
            <div className="display">TODO</div>
            <p>Count</p>
          </section>

          <section className="start">
            <button></button>
            <p>Start</p>
          </section>

          <section className="strict">
            <button></button>
            <p>Strict</p>
          </section>

          <section className="power">
            <p className="off">Off</p>
            <p className="on">On</p>
            <button></button>
          </section>
        </div>
      </div>
    </div>
  );
};

const colors = ['red', 'green', 'blue', 'yellow'];

export default App;
