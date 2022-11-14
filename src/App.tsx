import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EventFormPage from './pages/EventFormPage';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<EventFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
