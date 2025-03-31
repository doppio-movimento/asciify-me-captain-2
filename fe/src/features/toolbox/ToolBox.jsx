import { useToolbox } from "~/contexts/ToolboxContext";

const ToolBox = (props) => {
    const { setCharsPerRow } = useToolbox();

    return (
        <div className="h-full w-1/3 border border-lime-900 rounded">
        </div>
    );
};

export default ToolBox;
