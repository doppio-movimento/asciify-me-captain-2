import { useToolbox } from '~/contexts/ToolboxContext';

const Grid = (props) => {
    const { asciiMatrix } = useToolbox();

    const getCharColor = (elem) => {
        return `rgb(${elem.color[0]}, ${elem.color[1]}, ${elem.color[2]})`;
    }

    return (
        <>
            {asciiMatrix && (
                <div className="absolute z-10 break-words text-[5px] font-mono bg-red-900" style={{ width: "325ch", height: "20ch" }}>
                    {asciiMatrix.map((row, index) => (
                        <p>
                            {row.map((elem, k) => (
                                <span style={{ color: getCharColor(elem) }}>
                                    {elem.character}
                                </span>
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
