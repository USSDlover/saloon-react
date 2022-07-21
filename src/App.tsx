import React from 'react';
import './App.css';

function Readings () {
    return (
        <section>
            <ul>
                <li>
                    <a
                        href="https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes"
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
    )
}

function App() {
  return (
    <div>
        <Readings />
    </div>
  );
}

export default App;
