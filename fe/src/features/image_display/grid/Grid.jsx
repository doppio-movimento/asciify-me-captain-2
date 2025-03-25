import { useToolbox } from '~/contexts/ToolboxContext';
import { useState } from "react";
import Character from '~/features/image_display/grid/Character';

const Grid = (props) => {
    const { asciiMatrix, charsPerRow, filter, setFilter } = useToolbox();
    const getCharColor = (elem) => {
        return `rgb(${elem.color[0]}, ${elem.color[1]}, ${elem.color[2]})`;
    };

    return (
        <>
            {asciiMatrix ? (
                <div
                    className="absolute z-10 break-words font-mono"
                    style={{ width: `${charsPerRow}ch`, height: '20ch', fontSize: "20px" }}
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
                    <p style={{fontSize: "20px"}}>
                {Array.from(Array(charsPerRow * 20).keys()).map((k, i) => <span>x</span>)} 
                    </p>
                </div>
            }
        </>
    );
};

export default Grid;
