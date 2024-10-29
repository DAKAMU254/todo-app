// src/components/TaskList.js
import React, { useContext } from 'react';
import Task from './Task';
import TaskContext from '../Context/TaskContext';

const TaskList = ({ searchTerm }) => {
  const { state } = useContext(TaskContext);
  const filteredTasks = state.tasks.filter(task => 
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
