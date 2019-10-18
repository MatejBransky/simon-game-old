# FreeCodeCamp project: Simon game

- Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/obYBjE.
  Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.
- User Story: I am presented with a random series of button presses.
- User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
- User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
- User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
- User Story: I can see how many steps are in the current series of button presses.
- User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.
- User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
- User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.
- Hint: Here are mp3s you can use for each button: https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3.
- Remember to use Read-Search-Ask if you get stuck.
- When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.
- You can get feedback on your project by sharing it with your friends on Facebook.

## starter-react-with-typescript

### Features

- TypeScript
- ESlint
- Prettier
- React
- aliasing in imports `import Foo from "../../Foo"` -> `import Foo from "@/Foo" // maps to "<rootDir>/src/Foo"`
- .env
- bundle report (`dist/report.html`)
- static folder (just copies files into the dist)
- precommit hook: checks types, formats code, lints errors
- browserslist support
- VS Code settings
- unit & integration testing with Jest
- e2e testing with Cypress

### Options

- indentation, tab vs spaces and single/double quotes: in `.prettierrc`:

```json
{
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2
}
```

and in `.editorconfig`:

```
indent_style = space
indent_size = 2
```

- browser compatibility: in `.browserslistrc` ([more info](https://github.com/browserslist/browserslist))

- port of localhost: (`default: 1234`) but you can change it pkg.script start with option `--port 1111` (you must update `baseUrl` in `cypress.json`)

### VS Code extensions

- ESlint
- Prettier
- stylelint
- EditorConfig

_TODO_

```
code --extensions-dir
    Set the root path for extensions.
code --list-extensions
    List the installed extensions.
code --show-versions
    Show versions of installed extensions, when using --list-extension.
code --install-extension ( | )
    Installs an extension.
code --uninstall-extension ( | )
    Uninstalls an extension.
code --enable-proposed-api ()
    Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually.
```
