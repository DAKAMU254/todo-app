// src/App.js
import React, { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskLIst';
import SearchBar from './Components/SearchBar';
// In App.js or index.js
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
<div className="container mx-auto p-4 md:p-6 lg:p-8"></div>
 
 
 
 
 return (
    
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskForm />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskList searchTerm={searchTerm} />
      
    </div>
  );
};

export default App;
