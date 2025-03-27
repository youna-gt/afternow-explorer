import React from 'react';
import structure from '../afternow_structure.json';

function App() {
  console.log(structure);
  return (
    <div>
      <h1>{structure.name}</h1>
      <pre>{JSON.stringify(structure.children, null, 2)}</pre>
    </div>
  );
}

export default App;