import { useToolbox } from '~/contexts/ToolboxContext';
import { useState } from "react";
import Character from '~/features/image_display/grid/Character';

const Grid = (props) => {
    const { asciiMatrix, charsPerRow } = useToolbox();
    const [filter, setFilter] = useState(/[\"a-zA-Z]/);
    const getCharColor = (elem) => {
        return `rgb(${elem.color[0]}, ${elem.color[1]}, ${elem.color[2]})`;
    };

    return (
        <>
            {asciiMatrix && (
                <div
                    className="absolute z-10 break-words text-[10px] font-mono"
                    style={{ width: `${charsPerRow}ch`, height: '20ch' }}
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
            )}
        </>
    );
};

export default Grid;
