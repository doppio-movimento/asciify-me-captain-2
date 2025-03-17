import { useToolbox } from '../../../../contexts/ToolboxContext';

const StatusSwitch = (props) => {
    const { gridOn, setGridOn } = useToolbox();

    return (
        <div className="relative h-1/7 w-full flex justify-center cursor-pointer">
            <div
                className="w-4/7 bg-black h-4 rounded-xl relative"
                style={{ backgroundColor: gridOn ? 'blue' : 'orange' }}
                onClick={() => setGridOn(!gridOn)}
            >
                <div
                    className="absolute top-[50%] translate-y-[-50%] z-10 w-7 h-7 rounded-full text-xs flex justify-center place-items-center"
                    style={{
                        left: gridOn ? 0 : '85%',
                        backgroundColor: gridOn ? 'cyan' : 'red',
                    }}
                >
                    {gridOn ? 'ON' : 'OFF'}
                </div>
            </div>
        </div>
    );
};

export default StatusSwitch;
