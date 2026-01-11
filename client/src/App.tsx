import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MoviePage from './pages/MoviePage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import PaymentPage from './pages/PaymentPage';
import WaitingRoomPage from './pages/WaitingRoomPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import AdminPage from './pages/AdminPage';

import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/book/:showId" element={<SeatSelectionPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<BookingConfirmationPage />} />
        <Route path="/waiting-room" element={<WaitingRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
