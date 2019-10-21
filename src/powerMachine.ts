import { Machine } from 'xstate';

export interface States {
  states: {
    notRunning: {};
    running: {};
  };
}

type Events = { type: 'TOGGLE' };

export const powerMachine = Machine<{}, States, Events>({
  id: 'power',
  initial: 'notRunning',
  states: {
    notRunning: {
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        TOGGLE: 'notRunning',
      },
    },
  },
});
