import Grid from './grid/Grid';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useToolbox } from '~/contexts/ToolboxContext';
import { useState } from 'react';

const ImageDisplay = (props) => {
    const { frameOn, imageUrl, imageLoading, charsPerColumn, charsPerRow, charSize } = useToolbox();
    const [imageHeight, setImageHeight] = useState('100%');

    return (
        <div
            className="relative flex flex-row-reverse w-full h-full bg-neutral-950 p-2 overflow-hidden rounded-lg"
        >
            <div
                className="relative bg-black shadow-xl rounded-lg overflow-hidden p-2 flex justify-center place-items-center font-mono"
                style={{ width: `${charsPerRow}ch`, height: imageHeight, fontSize: `${charSize}px` }}
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
