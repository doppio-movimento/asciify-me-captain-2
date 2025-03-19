import Grid from './grid/Grid';
import { useToolbox } from '~/contexts/ToolboxContext';
import { useState, useEffect, useRef } from 'react';

const ImageDisplay = (props) => {
    const { frameOn } = useToolbox();
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        console.log(parentRef.current.offsetWidth);
    }, []);

    return (
        <div
            ref={parentRef}
            className="border relative h-full w-6/9 overflow-hidden flex justify-center place-items-center drop-shadow-md"
            style={{ borderColor: frameOn ? 'white' : 'transparent' }}
        >
            <img src={'/planet.png'} alt="asciify it" />
            <Grid />
        </div>
    );
};

export default ImageDisplay;
