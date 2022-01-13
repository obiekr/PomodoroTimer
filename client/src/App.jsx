import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPomodoro from './pages/NewPomodoro';
import Pomodoro from './pages/Pomodoro';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewPomodoro />} />
          <Route path="/timer" element={<Pomodoro />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
