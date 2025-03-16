import { useToolbox } from '../../../contexts/ToolboxContext';
import { useState, useEffect } from 'react';

const Grid = (props) => {
    const { gridOn, setGridOn, gridColor, granularity, frameOn } = useToolbox();
    const [fontSize, setFontSize] = useState(18);

    useEffect(() => {
        //setFontSize(Math.abs(Math.trunc(-0.0399 * granularity + 400)))
    }, [granularity]);

    return (
        <>
            {gridOn ? (
                <>
                    <div
                        className="absolute grid z-10 w-full h-full"
                        style={{
                            gridTemplateColumns: `repeat(${Math.trunc(Math.sqrt(granularity))}, minmax(0,1fr))`,
                        }}
                    >
                        {Array.from(Array(Math.trunc(granularity)).keys()).map(
                            (key, index) => (
                                <div
                                    className="flex justify-center place-items-center opacity-75 border-r border-b"
                                    style={{ fontSize: `${fontSize}px`, borderColor: gridColor }}
                                ></div>
                            ),
                        )}
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Grid;
