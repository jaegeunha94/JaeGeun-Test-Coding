import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactQueryProfile from './src/Context/ReactQuery/ReactQueryProfile';
import Home from './src/Home';
import ServeRouting from './src/ReactRouterDOM/ServeRouting/ServeRouting';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactQueryProfile />} />
        <Route path="/home" element={<Home />} />
        {/* // 서브 라우팅 */}
        <Route path="/serve/*" element={<ServeRouting />} />
        {/* //중첩 라우팅
        <Route path="/nest" element={<NestedTest />}>
          <Route path=":id" element={<NestedTest2 />} />
        </Route>  */}
      </Routes>
    </Router>
  );
}
