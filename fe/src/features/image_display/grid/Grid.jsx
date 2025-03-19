import { useToolbox } from '~/contexts/ToolboxContext';
import { useState, useEffect } from 'react';

const Grid = (props) => {
    const {
        gridOn,
        gridColor,
        granularity,
        frameOn,
        asciiOn,
        asciiMatrix,
        setAsciiMatrix,
    } = useToolbox();
    const [fontSize, setFontSize] = useState(20);

    useEffect(() => {
        // TODO: construct a function for setting the font-size
        // as the granularity changes
    }, [granularity]);

    return (
        <div
            className="absolute grid z-10 w-full h-full"
            style={{
                gridTemplateColumns: `repeat(${Math.trunc(Math.sqrt(granularity))}, minmax(0,1fr))`,
            }}
        >
            {Array.from(Array(Math.trunc(granularity)).keys()).map(
                (key, index) => (
                    <div
                        className="flex justify-center place-items-center border-r border-b font-thin"
                        style={{
                            fontSize: `${fontSize}px`,
                            borderColor: gridOn ? gridColor : 'transparent',
                            color: asciiMatrix ? `rgb(${asciiMatrix[Math.trunc(index / asciiMatrix.length)][index % asciiMatrix.length][1][0]}, ${asciiMatrix[Math.trunc(index / asciiMatrix.length)][index % asciiMatrix.length][1][1]}, ${asciiMatrix[Math.trunc(index / asciiMatrix.length)][index % asciiMatrix.length][1][2]})` : "blue",
                        }}
                    >
                        {asciiOn
                            ? asciiMatrix[
                                  Math.trunc(index / asciiMatrix.length)
                              ][index % asciiMatrix.length][0]
                            : ''}
                    </div>
                ),
            )}
        </div>
    );
};

export default Grid;
