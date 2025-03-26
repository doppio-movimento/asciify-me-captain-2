import { gsap } from 'gsap';
import { useToolbox } from '~/contexts/ToolboxContext';
import { useState, useLayoutEffect } from "react";
import Character from '~/features/image_display/grid/Character';

const Grid = (props) => {
    const { asciiMatrix, charsPerRow, filter, setFilter, charSize } = useToolbox();
    const getCharColor = (elem) => {
        return `rgb(${elem.color[0]}, ${elem.color[1]}, ${elem.color[2]})`;
    };

    useLayoutEffect(() => {
        gsap.from('.ascii-character', { opacity: 0, duration: 0.0001, stagger: 0.0001 });
    }, [asciiMatrix]);

    return (
        <>
            {asciiMatrix ? (
                <div
                    className="absolute z-10 break-words font-mono"
                    style={{ width: `${charsPerRow}ch`, height: '52em', fontSize: `${charSize}px` }}
                >
                    {asciiMatrix.map((row, index) => (
                        <p>
                            {row.map((elem, k) => (
                                <Character element={elem} filter={filter} />
                            ))}
                            <br />
                        </p>
                    ))}
                </div>
            ) : <div className="absolute z-10 text-gray-900 break-words font-mono" style={{ width: `${charsPerRow}ch`, height: '20ch'}}>
                    <p style={{fontSize: `${charSize}px`}}>
                {Array.from(Array(charsPerRow * 52).keys()).map((k, i) => <span>&#9724;</span>)} 
                    </p>
                </div>
            }
        </>
    );
};

export default Grid;
