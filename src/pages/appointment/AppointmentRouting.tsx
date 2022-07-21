import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppointmentDetail from './pages/AppointmentDetail';
import Appointment from './Appointment';
import AppointmentEdit from './pages/AppointmentEdit';

export default function AppointmentRouting() {
    return (
        <Routes>
            <Route path="appointment" element={<Appointment />}>
                <Route
                    index
                    element={
                     <main>
                         <p>Select an appointment</p>
                     </main>
                    }
                />
                <Route path=":appointmentId" element={<AppointmentDetail />} />
                <Route path=":appointmentId/edit" element={<AppointmentEdit />} />
            </Route>
        </Routes>
    )
}