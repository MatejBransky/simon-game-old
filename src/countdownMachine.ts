import { Machine } from 'xstate';

export const countdownMachine = Machine(
  {
    id: 'countdown',
    context: {
      delay: 1000,
    },
    initial: 'ready',
    states: {
      ready: {
        after: [
          {
            delay: 'getDelay',
            target: 'steady',
          },
        ],
      },
      steady: {
        after: [
          {
            delay: 'getDelay',
            target: 'go',
          },
        ],
      },
      go: {
        after: [
          {
            delay: 'getDelay',
            target: 'finished',
          },
        ],
      },
      finished: { type: 'final' },
    },
  },
  {
    delays: {
      getDelay: ctx => ctx.delay,
    },
  }
);
