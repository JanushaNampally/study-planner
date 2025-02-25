import React, { userState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📚 Study Planner</h1>
        <p>Organize your study schedule effectively!</p>

        {/* Timer */}
        <Timer />

        {/* Task List */}
        <TaskList />

        {/* Calendar */}
        <Calendar />



        <button className="theme-button">Get Started</button>
      </header>
    </div>
  );
}

export default App;