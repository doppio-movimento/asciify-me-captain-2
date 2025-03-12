import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideNavigator from '../features/navigation/SideNavigator';
import Header from '../features/header/Header';

const Root = (props) => {
    var location = useLocation();

    return (
        <div className="flex flex-col h-screen min-h-screen bg-teal-950 p-5">
            <Header
                title={'asciify me captain'}
                colors={[
                    [50, 50, 255],
                    [59, 235, 111],
                    [229, 235, 59],
                ]}
            />
            <div className="flex bg-teal-800 p-5 gap-5 rounded h-7/9">
                <SideNavigator />
                <div className="flex justify-center place-items-center rounded bg-teal-600 w-2/3 p-2">
                    <Outlet />
                </div>
            </div>
            <div className="flex h-1/9 justify-center place-items-center mt-2 bg-teal-800 rounded">
                LINKS
            </div>
        </div>
    );
};

export default Root;
