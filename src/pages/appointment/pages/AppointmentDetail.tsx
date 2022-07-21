import React from 'react';
import {Link, useParams} from 'react-router-dom';

export default function AppointmentDetail() {
    let params = useParams();
    return (
        <>
            <h2>
                Appointment Detail
            </h2>
            <article>
                <Link to={`./edit`}>
                    Edit {params.appointmentId}
                </Link>
            </article>
        </>
    )
}