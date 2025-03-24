import Grid from './grid/Grid';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useToolbox } from '~/contexts/ToolboxContext';
import { useState, useEffect, useRef } from 'react';

const ImageDisplay = (props) => {
    const { frameOn, imageUrl, imageLoading, setGridRows, setGridCols } = useToolbox();
    const parentRef = useRef(null);
    const imagePaneRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);
    const [imageWidth, setImageWidth] = useState('40%');
    const [imageHeight, setImageHeight] = useState('100%');

    useEffect(() => {
        console.log(imagePaneRef.current.offsetWidth);
        setGridRows(100); 
    }, []);

    return (
        <div
            className="relative flex flex-row-reverse w-full h-full bg-neutral-950 p-2 overflow-hidden rounded-lg"
            ref={parentRef}
        >
            <div
                className="relative bg-neutral-900 shadow-xl rounded-lg overflow-hidden p-2 flex justify-center place-items-center text-[5px] font-mono"
                style={{ width: "325ch", height: imageHeight }}
                ref={imagePaneRef}
            >
                {imageLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="relative w-full h-full rounded overflow-hidden">
                        <img
                            className="absolute w-full h-full rounded-lg opacity-0"
                            src={
                                imageUrl
                                    ? `http://localhost:8000/${imageUrl}`
                                    : './skull.png'
                            }
                            alt="stuff"
                        />
                        <Grid />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageDisplay;
