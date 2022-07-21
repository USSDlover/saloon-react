import React from 'react';
import {Outlet, NavLink, useSearchParams} from 'react-router-dom';

export default function Appointment() {
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h1>Appointment page 2</h1>
            <NavLink
                style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    }
                }}
                to="./1235"
            >
                Link to detail
            </NavLink>
            <input
                type="search"
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            <hr/>
            <Outlet/>
        </div>
    )
}