import React, { useState } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);
    const [isPanelOpen, setIsPanelOpen] = useState(false); 


    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    const handleInput = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
        setResult(null);
    };

    const deleteLast = () => {
        setInput(input.slice(0, -1));
    };

    const addToHistory = (input, result) => {
        const newEntry = `${input} = ${result}`;
        setHistory([newEntry, ...history]);
    };

    const calculate = () => {
        try {
            const parsedInput = input
                .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
                .replace(/(\d+)\^(\d+)/g, 'Math.pow($1, $2)')
                .replace(/(\d+)%/g, '($1/100)');
            const evalResult = eval(parsedInput);
            setResult(evalResult);
            addToHistory(input, evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    const deleteHistory = (index) => {
        const updatedHistory = history.filter((_, i) => i !== index);
        setHistory(updatedHistory);
    };

    return (
        <div className="calculator-container">
            <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
                <h3>Advanced Functions</h3>
                <button onClick={() => handleInput('^')} className="side-button">
                    ^
                </button>
                <button onClick={() => handleInput('√')} className="side-button">
                    √
                </button>
                <button onClick={() => handleInput('%')} className="side-button">
                    %
                </button>
            </div>

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
                    <button onClick={togglePanel}>SC</button>
                </div>
                <div className="history">
                    <h3>History</h3>
                    <ul>
                        {history.map((entry, index) => (
                            <li key={index}>
                                {entry}
                                <button
                                    className="deleteBtn"
                                    onClick={() => deleteHistory(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;