import { useToolbox } from "~/contexts/ToolboxContext";
import OnOffSwitch from "~/components/OnOffSwitch";

const ASCIITransformBox = (props) => {
    const { asciiOn, setAsciiOn } = useToolbox();

    return (
        <div className="h-2/5 border border-cyan-900 flex flex-col place-items-center gap-4 rounded">
            <div className="font-mono text-white w-full flex justify-center pt-2 text-sm">
                ASCII Transform
            </div>
            <OnOffSwitch on={asciiOn} setOn={setAsciiOn} />

            <div className="flex flex-col gap-2 w-full justify-center place-items-center">
                <div className="text-cyan-400 font-mono text-xs">
                    Colorization Metric
                </div>
                <div className="relative bg-cyan-600 w-2/3 h-4 rounded-xl">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-mono text-xs">
                        Chebyshev
                    </div>
                    <div className="absolute top-[50%] translate-y-[-50%] left-0 w-5 h-5 bg-white rounded-full border flex justify-center place-items-center font-mono text-sm">
                        &#9660;
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full justify-center place-items-center">
                <div className="text-cyan-400 font-mono text-xs">
                    Traversal Algorithm
                </div>
                <div className="relative bg-cyan-600 w-2/3 h-4 rounded-xl">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-mono text-xs">
                        Random
                    </div>
                    <div className="absolute top-[50%] translate-y-[-50%] left-0 w-5 h-5 bg-white rounded-full border flex justify-center place-items-center font-mono text-sm">
                        &#9660;
                    </div>
                </div>
            </div>

            <div className="w-1/3 bg-cyan-500 flex justify-center place-items-center rounded h-10 font-mono">
                Animate
            </div>
        </div>
    );
};

export default ASCIITransformBox;
