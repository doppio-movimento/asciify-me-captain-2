import { useToolbox } from "~/contexts/ToolboxContext";
import OnOffSwitch from "~/components/OnOffSwitch";
import GranularitySlider from "./tools/GranularitySlider";
import FrameCheckBox from "./tools/FrameCheckBox";
import FreeformCheckBox from "./tools/FreeformCheckBox";
import ColorSelector from "./tools/ColorSelector";
import { useState } from "react";

const GridBox = (props) => {
    const [readyToDrag, setReadyToDrag] = useState(false);
    const [dialPosition, setDialPosition] = useState(0);
    const { gridOn, setGridOn } = useToolbox();

    return (
        <div className="h-2/5 w-full border border-amber-900 rounded">
            <div className="flex flex-col h-full place-items-center gap-5">
                <div className="flex pt-3 font-mono text-xs text-white h-1/7">
                    Grid
                </div>
                <OnOffSwitch on={gridOn} setOn={setGridOn} />
                <ColorSelector />
                <FrameCheckBox />
                <FreeformCheckBox />
                <GranularitySlider />
            </div>
        </div>
    );
};

export default GridBox;
