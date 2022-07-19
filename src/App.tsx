import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
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
            <ul>
                <li>
                    <a
                        href="https://reactrouter.com/docs/en/v6/getting-started/tutorial"
                        target="_blank"
                        rel="noreferrer"
                    >
                        React Router Docs
                    </a>
                </li>
                <li>
                    <a
                        href="https://redux.js.org/introduction/getting-started/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Redux Docs
                    </a>
                </li>
            </ul>
        </section>
    </div>
  );
}

export default App;
