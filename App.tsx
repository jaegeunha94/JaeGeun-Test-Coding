import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BeforeSuspense from './src/Suspense/BeforeSuspense/BeforeSuspense';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeforeSuspense />} />
      </Routes>
    </Router>
  );
}
