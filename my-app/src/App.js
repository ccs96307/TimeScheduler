import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Horizon from './Horizon';
import Calendar from './Calendar';
import Overview from './Overview';
import Clock from './Clock';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/horizon">Horizon</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/horizon" replace />} />
            <Route path="/horizon" element={<Horizon />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/clock" element={<Clock />} />
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
