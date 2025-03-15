import { useToolbox } from '../../../contexts/ToolboxContext';
import { useState, useEffect } from 'react';

const Grid = (props) => {
    const { gridOn, setGridOn, granularity, frameOn } = useToolbox();
    const [charSize, setCharSize] = useState(100);

    useEffect(() => {
        if (granularity <= 25) {
            setCharSize(100);
        }
        if (granularity > 25 && granularity <= 64) { 
            setCharSize(50);
        }
        if (granularity > 64 && granularity <= 144) {
            setCharSize(25);
        }
        if (granularity > 144 && granularity <= 300) {
            setCharSize(12);
        }
        if (granularity > 300 && granularity <= 400) {
            setCharSize(8);
        }
        if (granularity > 400 && granularity <= 500) {
            setCharSize(4);
        }
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
                                    className="flex justify-center place-items-center text-cyan-500 font-mono opacity-75"
                                    style={{ fontSize: `${charSize}px` }}
                                >
                                    +
                                </div>
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
