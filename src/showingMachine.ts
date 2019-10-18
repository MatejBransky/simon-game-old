import { Machine, assign } from 'xstate';

export const showingMachine = Machine(
  {
    id: 'showing',
    context: {
      speed: 1,
      steps: [],
      currentStep: -1,
    },
    initial: 'checking',
    states: {
      checking: {
        on: {
          '': [
            {
              cond: 'isTheLastStep',
              target: 'done',
            },
            {
              target: 'shortBreak',
            },
          ],
        },
      },
      shortBreak: {
        after: {
          delay: 'getShortDelay',
          target: 'showingStep',
        },
      },
      showingStep: {
        after: {
          delay: 'getLongDelay',
          target: 'checking',
        },
      },
      done: { type: 'final' },
    },
  },
  {
    guards: {
      isTheLastStep: ctx => ctx.currentStep === ctx.steps.length - 1,
    },
    actions: {
      setNextStep: ctx => assign({ currentStep: ctx.currentStep + 1 }),
    },
    delays: {
      getShortDelay: ctx => ctx.speed * 500,
      getLongDelay: ctx => ctx.speed * 1000,
    },
  }
);
