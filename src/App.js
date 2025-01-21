import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('error')
    }
  };
  

  return (
    <div className='calculator'>
      <h1 className='title'>Calculator</h1>
      <div className='calculator__container'>
        <div className = 'calculator_input'>{input || 0 }</div>
        <div className='calculator_result'>{result}</div>
        <div className="buttons">
                <button onClick={clearInput}>AC</button>
                <button onClick={deleteLast}>C</button>
                <button onClick={() => handleInput('/')}>÷</button>
                <button onClick={() => handleInput('*')}>×</button>

                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('-')}>−</button>

                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('+')}>+</button>

                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={calculate}>=</button>

                <button onClick={() => handleInput('0')} className="zero">0</button>
                <button onClick={() => handleInput('.')}>.</button>
            </div>
      </div>
    </div>
  );
}

export default App;