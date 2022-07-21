import React from 'react';
import {Link} from 'react-router-dom';

export default function MainTemplate(props: any) {
    return (
        <>
            <h1>Saloon APP</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> | {" "}
                <Link to="/expenses">Expenses</Link> | {" "}
                <Link to="/appointment">Appointment</Link>
            </nav>
            <section>
                {props.children}
            </section>
        </>
    )
}