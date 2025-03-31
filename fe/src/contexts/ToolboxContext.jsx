import React, { createContext, useState, useEffect, useContext } from 'react';

const ToolboxContext = createContext(null);

export const ToolboxProvider = ({ children }) => {
    const [gridOn, setGridOn] = useState(true);
    const [gridColor, setGridColor] = useState('rgb(255,0,0)');
    const [frameOn, setFrameOn] = useState(false);
    const [granularity, setGranularity] = useState(10000);
    const [asciiOn, setAsciiOn] = useState(false);
    const [asciiMatrix, setAsciiMatrix] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [charsPerColumn, setCharsPerColumn] = useState(52);
    const [charsPerRow, setCharsPerRow] = useState(325);
    const [charSize, setCharSize] = useState(10);
    const [filter, setFilter] = useState(/[]/);
    const [grayscale, setGrayscale] = useState("$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI>:,\"^`'. ");
    const [phrase, setPhrase] = useState("it was gorgeousness and gorgeosity flesh");
    const [saturation, setSaturation] = useState(0);

    return (
        <ToolboxContext.Provider
            value={{
                gridOn,
                setGridOn,
                gridColor,
                setGridColor,
                granularity,
                setGranularity,
                frameOn,
                setFrameOn,
                asciiOn,
                setAsciiOn,
                asciiMatrix,
                setAsciiMatrix,
                imageUrl,
                setImageUrl,
                imageLoading,
                setImageLoading,
                charsPerColumn,
                setCharsPerColumn,
                charsPerRow,
                setCharsPerRow,
                filter,
                setFilter,
                charSize,
                setCharSize,
                grayscale,
                setGrayscale,
                phrase,
                setPhrase,
                saturation,
                setSaturation
            }}
        >
            {children}
        </ToolboxContext.Provider>
    );
};

export const useToolbox = () => useContext(ToolboxContext);
