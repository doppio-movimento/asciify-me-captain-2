import Grid from './grid/Grid';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useToolbox } from '~/contexts/ToolboxContext';
import { useState, useEffect, useRef } from 'react';

const ImageDisplay = (props) => {
    const { frameOn, imageUrl, imageLoading } = useToolbox();
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        console.log(parentRef.current.offsetWidth);
    }, []);

    return (
        <div className="w-full h-full bg-neutral-950" ref={parentRef}>
            {/*<div
                ref={parentRef}
                className="border relative overflow-hidden flex justify-center place-items-center drop-shadow-md bg-neutral-950"
                style={{ borderColor: frameOn ? 'white' : 'transparent' }}
            >
                {imageLoading ? (
                    <LoadingSpinner />
                ) : (
                    <img
                        src={
                            imageUrl
                                ? `http://localhost:8000/${imageUrl}`
                                : './planet.png'
                        }
                        alt="asciify it"
                    />
                )}
                {<Grid />}
            </div>*/}
        </div>
    );
};

export default ImageDisplay;
