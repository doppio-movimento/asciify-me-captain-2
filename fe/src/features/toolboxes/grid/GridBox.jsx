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
    const { gridOn, setGridOn, setCharsPerRow, setFilter, setCharSize, setGrayscale } = useToolbox();

    const charsPerRowInputRef = useRef();
    const regexFilterInputRef = useRef();
    const charSizeInputRef = useRef();
    const grayscaleInputRef = useRef();

    const handleGrayscaleChange = () => {
       setGrayscale(grayscaleInputRef.current.value); 
    };

    const handleCharsPerRowChange = () => {
        setCharsPerRow(parseInt(charsPerRowInputRef.current.value));
    };

    const handleCharSizeChange = () => {
        setCharSize(parseInt(charSizeInputRef.current.value));
    }

    const handleRegexFilterChange = () => {
        var re = new RegExp(regexFilterInputRef.current.value);
        setFilter(re);
    };

    return (
        <div className="h-full w-1/3 border border-teal-900 rounded">
            <div className="flex h-full place-items-center justify-center gap-5">
                <input
                    className="w-1/9 bg-teal-200"
                    ref={charsPerRowInputRef}
                    type="text"
                    onChange={handleCharsPerRowChange}
                    placeholder="width"
                />
                <input
                    className="w-1/9 bg-teal-200"
                    ref={regexFilterInputRef}
                    type="text"
                    onMouseLeave={handleRegexFilterChange}
                    placeholder="filter"
                />
                <input
                    className="w-1/9 bg-teal-200"
                    ref={charSizeInputRef}
                    type="text"
                    onMouseLeave={handleCharSizeChange}
                    placeholder="char size"
                />
                <input
                    className="w-1/9 bg-teal-200"
                    ref={grayscaleInputRef}
                    type="text"
                    onChange={handleGrayscaleChange}
                    placeholder="grayscale"
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
