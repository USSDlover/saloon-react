import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
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
