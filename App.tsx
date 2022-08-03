import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/Home';
import ErrorTest from './src/Error/ErrorTest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorTest />} />
      </Routes>
    </Router>
  );
}
