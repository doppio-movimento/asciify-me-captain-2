import { useToolbox } from "../../../../contexts/ToolboxContext";

const StatusSwitch = (props) => {
    const { gridOn, setGridOn } = useToolbox();

    return (
        <div className="relative h-1/7 w-full flex justify-center">
            <div
                className="w-4/7 bg-black h-4 rounded-xl bg-cyan-950 relative"
                onClick={() => setGridOn(!gridOn)}
            >
                <div className="absolute top-[50%] translate-y-[-50%] z-10 w-7 h-7 rounded-full bg-cyan-400 text-xs flex justify-center place-items-center">
                    ON
                </div>
                <div className="absolute top-[50%] translate-y-[-50%] right-4 text-amber-500 font-mono text-xs">
                    Turn off
                </div>
            </div>
        </div>
    );
};

export default StatusSwitch;
