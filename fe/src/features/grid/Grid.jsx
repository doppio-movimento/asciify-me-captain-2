import { useToolbox } from '../../contexts/ToolboxContext';

const Grid = (props) => {
    const { gridOn, setGridOn, granularity } = useToolbox();

    return (
        <>
            {gridOn ? (
                <>
                    <div className="absolute grid grid-flow-row z-10 w-full h-full">
                        {Array.from(
                            Array(Math.trunc(Math.sqrt(granularity))).keys(),
                        ).map((key, index) => (
                            <div className="w-full h-[1px] bg-cyan-500 opacity-50"></div>
                        ))}
                    </div>
                    <div className="absolute grid grid-flow-col z-10 w-full h-full">
                        {Array.from(
                            Array(Math.trunc(Math.sqrt(granularity))).keys(),
                        ).map((key, index) => (
                            <div className="w-[1px] h-full bg-cyan-500 opacity-50"></div>
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Grid;
