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
    const [fontSize, setFontSize] = useState(757 / 29);
    //const cellCharacter = String.fromCharCode(9646); 
    const cellCharacter = "x";

    useEffect(() => {
        // TODO: construct a function for setting the font-size
        // as the granularity changes
    }, [granularity]);

    return (
        <div className="absolute w-full h-full">
            <div className="font-mono break-words whitespace-pre-line text-white leading-[0.6]" style={{opacity: 0.8, fontSize: fontSize}}>{cellCharacter.repeat(10000)}</div>
        {/*<div
            className="absolute grid z-10 w-full h-full"
            style={{
                gridTemplateColumns: `repeat(${Math.trunc(Math.sqrt(granularity))}, minmax(0,1fr))`,
            }}
        >
        <div className="w-full h-full bg-blue-500 opacity-25"></div>
        {{Array.from(Array(Math.trunc(granularity)).keys()).map(
                (key, index) => (
                    <div
                        className="flex justify-center place-items-center border-r border-b font-thin font-mono"
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
            )}}
        </div>*/}
        </div>
    );
};

export default Grid;
