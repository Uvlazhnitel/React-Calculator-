import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  

  return (
    <div className='calculator '>
      <h1>Calculator</h1>
    </div>
  );
}

export default App;