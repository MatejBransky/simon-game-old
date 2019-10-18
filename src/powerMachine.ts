import { Machine } from 'xstate';

import { gameMachine } from './gameMachine';

export const powerMachine = Machine({
  id: 'power',
  initial: 'notRunning',
  states: {
    notRunning: {
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      invoke: gameMachine,
      on: {
        TOGGLE: 'notRunning',
      },
    },
  },
});
