import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactQueryProfile from './src/Context/ReactQuery/ReactQueryProfile';
import Home from './src/Home';
import NestedTest2 from './src/ReactRouterDOM/NestedTest2';
import NestedTest from './src/ReactRouterDOM/NestedTest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactQueryProfile />} />
        <Route path="/home" element={<Home />} />
        //중첩 라우팅
        <Route path="/nest" element={<NestedTest />}>
          <Route path=":id" element={<NestedTest2 />} />
        </Route>
      </Routes>
    </Router>
  );
}
