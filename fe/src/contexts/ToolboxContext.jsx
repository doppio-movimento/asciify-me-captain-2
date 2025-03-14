import React, { createContext, useState, useEffect, useContext } from "react";

const ToolboxContext = createContext(null);

export const ToolboxProvider = ({ children }) => {
    const [gridOn, setGridOn] = useState(true);

    return (
        <ToolboxContext.Provider value={{ gridOn, setGridOn }}>
            {children}
        </ToolboxContext.Provider>
    );
};

export const useToolbox = () => useContext(ToolboxContext);
