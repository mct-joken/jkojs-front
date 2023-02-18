import React from 'react';
import {Outlet} from "react-router-dom";

export const Contest = () => {
    return (
        <>
            <center>
                <h1>ContestTitle</h1>
                <Outlet/>
            </center>
        </>
    )
}