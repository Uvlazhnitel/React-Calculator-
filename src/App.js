import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () =>{
    setIsPanelOpen(!isPanelOpen);
  }

  const handleInput = (value) => {
    setResult('')
    setInput('')
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
    setResult('')
  };

  const addToHistory = (input, result) => {
    const newEntry = `${input} = ${result}`;
    setHistory([newEntry, ...history]); 
  };

  const calculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      addToHistory(input,evalResult)
    } catch (error) {
      setResult('error')
    }
  };

  const deleteHistory = (index) => {
    const updateHistory = history.filter((_,i) => i !==index);
    setHistory(updateHistory);
  }
  

  return (
    <div className="calculator">
        <div className="display">
            <div className="input">{input || '0'}</div>
            <div className="result">{result !== null ? `= ${result}` : ''}</div>
        </div>
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
            <button onClick={() => togglePanel ()}>SC</button>
        </div>
        <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry}
              <button className = 'deleteBtn' onClick = {() => deleteHistory(index)}>Delete</button></li>
          ))}
        </ul>
        </div>
        <div className={``}>
            <button onClick={() => handleInput('**')} className='power'>^</button>
            <button  onClick={() => handleInput('√ ')} className='root'>√ </button>
            <button onClick={() => handleInput('%')} className='percent'>%</button>
        </div>
    </div>
);
}

export default App;