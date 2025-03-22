import Grid from './grid/Grid';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useToolbox } from '~/contexts/ToolboxContext';
import { useState, useEffect, useRef } from 'react';

const ImageDisplay = (props) => {
    const { frameOn, imageUrl, imageLoading } = useToolbox();
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);
    const [imageWidth, setImageWidth] = useState('40%');
    const [imageHeight, setImageHeight] = useState('100%');

    useEffect(() => {
        console.log(parentRef.current.offsetWidth);
    }, []);

    return (
        <div
            className="relative flex flex-row-reverse w-full h-full bg-neutral-950 p-2 overflow-hidden rounded-lg"
            ref={parentRef}
        >
            <div
                className="relative bg-neutral-900 shadow-xl rounded-lg overflow-hidden p-2 flex justify-center place-items-center"
                style={{ width: imageWidth, height: imageHeight }}
            >
                {imageLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                    <img
                        className="w-full h-full rounded-lg"
                        src={
                            imageUrl
                                ? `http://localhost:8000/${imageUrl}`
                                : './skull.png'
                        }
                        alt="stuff"
                    />
                    <div className="absolute w-full h-full bg-gray opacity-100"></div>
                    </>
                )}
            </div>
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
