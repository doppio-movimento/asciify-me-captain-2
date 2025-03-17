import { useState, useEffect } from 'react';
import { useToolbox } from '../../../../contexts/ToolboxContext';

const ColorSelector = (props) => {
    const { gridColor, setGridColor } = useToolbox();
    const [index, setIndex] = useState(0);

    const colorOptions = [
        'rgb(255,0,0)',
        'rgb(0,255,0)',
        'rgb(0,0,255)',
        'rgb(255,255,0)',
        'rgb(255,0,255)',
        'rgb(0,255,255)',
        'rgb(255,255,255)',
        'rgb(0,0,0)',
    ];

    useEffect(() => {
        setGridColor(colorOptions[index]);
    }, [index]);

    const handleClick = () => {
        setIndex((index + 1) % colorOptions.length);
    };

    return (
        <div className="flex justify-between w-2/3 h-1/7">
            <div className="text-cyan-400 font-mono text-xs">Color</div>
            <div
                className="w-5 h-5 cursor-pointer"
                style={{ backgroundColor: colorOptions[index] }}
                onClick={handleClick}
            ></div>
        </div>
    );
};

export default ColorSelector;
