import React from 'react';
import {Outlet} from "react-router-dom";

export const Contest = () => {
    return (
        <>
            <h1>Contest</h1>
            <Outlet/>
        </>
    )
}