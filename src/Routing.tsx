import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Appointment from './pages/appointment/Appointment';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="appointment" element={<Appointment />}></Route>
        </Routes>
    )
}