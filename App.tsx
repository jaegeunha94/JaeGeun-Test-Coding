import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactQueryProfile from './src/Context/ReactQuery/ReactQueryProfile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactQueryProfile />} />
      </Routes>
    </Router>
  );
}
