import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import AppointmentRouting from './pages/appointment/AppointmentRouting';

export default function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
            <AppointmentRouting />
        </>
    )
}