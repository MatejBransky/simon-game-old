import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>Hello World! {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default App;
