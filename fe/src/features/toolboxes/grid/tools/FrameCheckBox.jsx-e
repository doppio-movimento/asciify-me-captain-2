import { useToolbox } from '~/contexts/ToolboxContext';

const FrameCheckBox = (props) => {
    const { frameOn, setFrameOn } = useToolbox();

    return (
        <div className="flex justify-between w-2/3 h-1/7">
            <div className="text-cyan-400 font-mono text-xs">Frame</div>
            <div
                className="w-5 h-5 border border-amber-300 flex justify-center place-items-center text-2xl text-white font-mono cursor-pointer"
                onClick={() => setFrameOn(!frameOn)}
            >
                {frameOn ? '*' : ''}
            </div>
        </div>
    );
};

export default FrameCheckBox;
