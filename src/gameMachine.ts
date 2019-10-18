import { Machine, assign } from 'xstate';

import { countdownMachine } from './countdownMachine';
import { showingMachine } from './showingMachine';

export const gameMachine = Machine(
  {
    id: 'game',
    context: {
      strict: false,
      gameSteps: [],
      playerStep: -1,
      lastStep: 5,
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          START: 'starting',
          TOGGLE_STRICT: {
            actions: 'toggleStrict',
          },
        },
      },
      starting: {
        invoke: countdownMachine,
        onDone: 'showing',
      },
      showing: {
        invoke: {
          id: 'showingMachine',
          src: showingMachine,
          data: { steps: ctx => ctx.gameSteps },
        },
        onDone: 'playing',
      },
      playing: {
        on: {
          CLICK: [
            {
              cond: 'isThePlayedStepCorrectAndLast',
              target: '#game.winner',
            },
            {
              cond: 'isThePlayedStepCorrectAndLastNeeded',
              actions: 'addGameStep',
              target: '#game.showing',
            },
            {
              cond: 'isThePlayedStepCorrect', // this is, I think, not a proper way of checking because it checks the step again but I want to avoid more nested states
              actions: 'updatePlayerStep',
            },
            {
              cond: 'isStrictMode',
              target: '#game.gameOver',
            },
            {
              actions: 'resetPlayerStep',
              target: '#game.showing',
            },
          ],
        },
      },
      gameOver: {
        on: {
          ACCEPT: 'idle',
        },
      },
      winner: {
        on: {
          ACCEPT: 'idle',
        },
      },
    },
  },
  {
    guards: {
      isThePlayedStepCorrectAndLast: (ctx, event) =>
        event.color === ctx.gameSteps[ctx.playerStep] &&
        ctx.playerStep === ctx.lastStep,
      isThePlayedStepCorrectAndLastNeeded: (ctx, event) =>
        event.color === ctx.gameSteps[ctx.playerStep] &&
        ctx.playerStep === ctx.gameSteps.length - 1,
      isThePlayedStepCorrect: (ctx, event) =>
        event.color === ctx.gameSteps[ctx.playerStep],
      isStrictMode: ctx => ctx.strict,
    },
    actions: {
      addGameStep: ctx =>
        assign({ gameSteps: [...ctx.gameSteps, getRandomColor()] }),
      toggleStrict: ctx => assign({ strict: !ctx.strict }),
      updatePlayerStep: ctx => assign({ playerStep: ctx.playerStep + 1 }),
      resetPlayerStep: () => assign({ playerStep: -1 }),
    },
  }
);

const colors = ['red', 'green', 'blue', 'yellow'];
const max = colors.length - 1;

function getRandomColor() {
  const index = Math.floor(Math.random() * (max + 1));
  return colors[index];
}
