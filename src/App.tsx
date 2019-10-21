import React from 'react';
import { useMachine } from '@xstate/react';
import { powerMachine } from './powerMachine';
import { gameMachine } from './gameMachine';

const App = () => {
  const [current, send] = useMachine(powerMachine);

  return (
    <div>
      <Power
        value={current.matches('running')}
        onClick={() => send('TOGGLE')}
      />
      {current.matches('running') && <Game />}
    </div>
  );
};

export default App;

const Power = ({ value, onClick }) => (
  <button onClick={onClick}>{value ? 'Turn Off' : 'Turn On'}</button>
);

const Game = () => {
  const [current, send] = useMachine(gameMachine);

  let status = '';

  if (current.matches('idle')) {
    status = 'idle';
  } else if (current.matches('starting')) {
    status = 'starting';
  } else if (current.matches('showing')) {
    status = 'showing';
  } else if (current.matches('playing')) {
    status = 'playing';
  }

  return (
    <div>
      <div>Status: {status}</div>
      <button onClick={() => send('START')}>Start</button>
    </div>
  );
};
