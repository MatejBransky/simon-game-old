import React, { useState } from 'react';
import css from '@emotion/css';

const App = () => {
  const [value, setValue] = useState(1);

  return (
    <div css={styles}>
      <h1>Hello World! {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

const styles = css`
  background: lightgray;

  h1 {
    color: red;
  }
`;

export default App;
