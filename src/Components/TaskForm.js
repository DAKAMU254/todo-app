import React, { useState, useContext } from 'react';
import TaskContext from '../Context/TaskContext';

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), name: taskName, completed: false };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border p-2"
        placeholder="New task"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
