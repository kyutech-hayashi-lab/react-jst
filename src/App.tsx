import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import HomePage from './pages/HomePage';
import EventFormPage from './pages/EventFormPage';
import awsmobile from './aws-exports';
import EventPage from './pages/EventPage';

Amplify.configure(awsmobile);
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<EventFormPage />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}
