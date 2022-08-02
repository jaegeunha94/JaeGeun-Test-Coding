import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/Home';
import UseContext from './src/Context/ReactContext/UseContext';
import ContextType from './src/Context/ReactContext/ContextType';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/contextType" element={<ContextType />} />
      </Routes>
    </Router>
  );
}
