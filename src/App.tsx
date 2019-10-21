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
        <section className="display">
          <div className="display" data-testid="display">
            --
          </div>
          <p>Count</p>
        </section>

        <section className="start">
          <button data-testid="button-start"></button>
          <p>Start</p>
        </section>

        <section className="strict">
          <button data-testid="button-strict"></button>
          <div className="notification"></div>{' '}
          {/** TODO: support active class */}
          <p>Strict</p>
        </section>

        <section className="power">
          <p>Off</p>
          <button className="switch" data-testid="button-power">
            <div className="off"></div>
          </button>
          <p>On</p>
        </section>
      </div>
    </div>
  );
};

const colors = ['red', 'green', 'blue', 'yellow'];

export default App;
