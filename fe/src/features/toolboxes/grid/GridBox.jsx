import { useToolbox } from "~/contexts/ToolboxContext";
import OnOffSwitch from "~/components/OnOffSwitch";
import GranularitySlider from "./tools/GranularitySlider";
import FrameCheckBox from "./tools/FrameCheckBox";
import FreeformCheckBox from "./tools/FreeformCheckBox";
import ColorSelector from "./tools/ColorSelector";
import { useState, useRef } from "react";

const GridBox = (props) => {
    const [readyToDrag, setReadyToDrag] = useState(false);
    const [dialPosition, setDialPosition] = useState(0);
    const { gridOn, setGridOn, setCharsPerRow } = useToolbox();

    const charsPerRowInputRef = useRef();

    const handleCharsPerRowChange = () => {
        setCharsPerRow(parseInt(charsPerRowInputRef.current.value));
    };

    return (
        <div className="h-full w-1/3 border border-fuchsia-900 rounded">
            <div className="flex flex-col h-full place-items-center gap-5">
                <div className="flex pt-3 font-mono text-xs text-white h-1/7">
                    Grid
                </div>
                <input
                    className="w-1/4 bg-fuchsia-200"
                    ref={charsPerRowInputRef}
                    type="text"
                    onChange={handleCharsPerRowChange}
                />
        {/*<OnOffSwitch on={gridOn} setOn={setGridOn} />
                <ColorSelector />
                <FrameCheckBox />
                <FreeformCheckBox />
                <GranularitySlider />*/}
            </div>
        </div>
    );
};

export default GridBox;
