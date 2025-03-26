import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideNavigator from '../features/navigation/SideNavigator';
import Header from '../features/header/Header';

const Root = (props) => {
    var location = useLocation();

    return (
        <div className="flex flex-col h-screen min-h-screen bg-stone-900 px-5">
            <Header
                title={'asciify me captain'}
                colors={[
                    [255, 255, 255],
                    [255, 255, 255],
                    [255, 255, 255],
                ]}
            />
            <div className="flex h-8/9">
        {/*<SideNavigator />*/}
                <div className="flex justify-center place-items-center w-full">
                    <Outlet />
                </div>
            </div>
        {/*<div className="flex h-1/9 justify-center place-items-center mt-2 bg-gray-950 rounded">
                LINKS
            </div>*/}
        </div>
    );
};

export default Root;
