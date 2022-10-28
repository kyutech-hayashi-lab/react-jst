import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './pages/EventPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>foo</div>} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
