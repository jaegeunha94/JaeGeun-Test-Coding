import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/Home';
import UseImperativeHandle from './src/Hook/UseImperativeHandle';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useimperative" element={<UseImperativeHandle />} />
      </Routes>
    </Router>
  );
}
