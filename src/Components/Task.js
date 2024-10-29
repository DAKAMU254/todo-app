// src/components/Task.js
import React, { useContext } from 'react';
import TaskContext from '../Context/TaskContext';

const Task = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  return (
    <div className={`flex justify-between items-center p-2 border-b ${task.completed ? 'bg-gray-200' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
      </div>
      <button onClick={handleDelete} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default Task;
