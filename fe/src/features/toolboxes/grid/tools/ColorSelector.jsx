import { useState } from "react";
import { useToolbox } from "../../../../contexts/ToolboxContext";

const ColorSelector = (props) => {
    const { gridColor, setGridColor } = useToolbox();
    const [paletteOpen, setPaletteOpen] = useState(false);

    return (
        <div className="flex justify-between w-2/3 h-1/7">
            <div className="text-cyan-400 font-mono text-xs">Color</div>
            <div className="w-5 h-5" style={{ backgroundColor: gridColor }}></div>
        </div>
    );
};

export default ColorSelector;
