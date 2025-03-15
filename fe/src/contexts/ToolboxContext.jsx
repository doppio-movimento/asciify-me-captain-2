import React, { createContext, useState, useEffect, useContext } from "react";

const ToolboxContext = createContext(null);

export const ToolboxProvider = ({ children }) => {
    const [gridOn, setGridOn] = useState(true);
    const [frameOn, setFrameOn] = useState(false);
    const [granularity, setGranularity] = useState(1);

    return (
        <ToolboxContext.Provider value={{ gridOn, setGridOn, granularity, setGranularity, frameOn, setFrameOn }}>
            {children}
        </ToolboxContext.Provider>
    );
};

export const useToolbox = () => useContext(ToolboxContext);
