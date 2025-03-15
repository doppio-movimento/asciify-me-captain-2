import { useToolbox } from "../../../contexts/ToolboxContext";
import GranularitySlider from "./tools/GranularitySlider";
import StatusSwitch from "./tools/StatusSwitch";
import { useState } from "react";

const GridBox = (props) => {
    const { gridOn, setGridOn } = useToolbox();
    const [readyToDrag, setReadyToDrag] = useState(false);
    const [dialPosition, setDialPosition] = useState(0);

    return (
        <div className="h-2/5 border border-cyan-900 rounded">
            <div className="flex flex-col h-full place-items-center gap-5">
                <div className="flex pt-3 font-mono text-sm text-white h-1/7">
                    Grid
                </div>
                <StatusSwitch />
                <div className="flex justify-between w-2/3 h-1/7">
                    <div className="text-cyan-400 font-mono text-xs">Color</div>
                    <div className="w-5 h-5 bg-amber-600"></div>
                </div>
                <div className="flex justify-between w-2/3 h-1/7">
                    <div className="text-cyan-400 font-mono text-xs">Frame</div>
                    <div className="w-5 h-5 bg-cyan-500 border border-cyan-500"></div>
                </div>
                <div className="flex justify-between w-2/3">
                    <div className="text-cyan-400 font-mono text-xs">
                        Freeform
                    </div>
                    <div className="w-5 h-5 bg-cyan-500 border border-cyan-500"></div>
                </div>
                <GranularitySlider />
            </div>
        </div>
    );
};

export default GridBox;
