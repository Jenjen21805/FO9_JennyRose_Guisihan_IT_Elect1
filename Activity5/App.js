import React from 'react';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

const App = () => {
  return (
    <>
      <CounterApp />
        { <ColorChangerApp />}
        </>
    );
};

export default App;