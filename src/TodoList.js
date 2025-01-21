import React from 'react';

const TodoList = ({ tasks, onDelete }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;