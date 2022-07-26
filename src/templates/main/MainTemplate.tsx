import React from 'react';
import {Link} from 'react-router-dom';

export default function MainTemplate(props: any) {
    return (
        <>
            <Link style={{
                textDecoration: "none",
                color: "black"
            }} to="/">
                <h1>Saloon APP</h1>
            </Link>
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