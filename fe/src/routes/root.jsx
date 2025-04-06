import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopNavigator from '../features/navigation/TopNavigator';
import Header from '../features/header/Header';

const Root = (props) => {
    var location = useLocation();
    const links = [
        "create",
        "gallery",
        "shop",
        "architecture",
    ];

    return (
        <div className="relative flex flex-col h-screen px-5 bg-linear-to-tl from-stone-900 to-zinc-900">
            <div className="flex my-5">
                <Header
                    title={'ascii-fy me captain'}
                />
                <TopNavigator links={links}/>
            </div>
            <div className="flex h-8/9">
                <div className="flex justify-center place-items-center w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Root;
