import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuspenseTest from './src/Suspense/SuspenseTest';
import Spinner from './src/Suspense/Spinner';

export default function App() {
  return (
    <Router>
      <Routes>
        <React.Suspense fallback={<Spinner />}>
          <Route path="/" element={<SuspenseTest />} />
        </React.Suspense>
      </Routes>
    </Router>
  );
}
