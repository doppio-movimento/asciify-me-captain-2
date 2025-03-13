const ASCIITransformBox = (props) => {
    return (
        <div className="h-2/5 border border-fuchsia-900 flex flex-col place-items-center gap-4">
            <div className="font-mono text-white w-full flex justify-center pt-2 text-sm">
                ASCII Transform
            </div>
            <div className="flex justify-center place-items-center w-full">
                <div className="w-2/3 h-4 bg-gray-950 rounded-xl relative">
                    <div className="absolute text-blue-400 left-2 top-[50%] translate-y-[-50%] font-mono text-xs">
                        Turn on
                    </div>
                    <div className="h-7 w-7 bg-red-500 rounded-full absolute top-[50%] translate-y-[-50%] text-xs flex justify-center place-items-center font-mono right-0">
                        OFF
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full justify-center place-items-center">
                <div className="text-blue-400 font-mono text-xs">
                    Colorization Metric
                </div>
                <div className="relative bg-blue-600 w-2/3 h-4 rounded-xl">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-mono text-xs">
                        Chebyshev
                    </div>
                    <div className="absolute top-[50%] translate-y-[-50%] left-0 w-5 h-5 bg-white rounded-full border flex justify-center place-items-center font-mono text-sm">
                        &#9660;
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full justify-center place-items-center">
                <div className="text-blue-400 font-mono text-xs">
                    Traversal Algorithm
                </div>
                <div className="relative bg-blue-600 w-2/3 h-4 rounded-xl">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-mono text-xs">
                        Random
                    </div>
                    <div className="absolute top-[50%] translate-y-[-50%] left-0 w-5 h-5 bg-white rounded-full border flex justify-center place-items-center font-mono text-sm">
                        &#9660;
                    </div>
                </div>
            </div>

            <div className="w-1/3 bg-blue-500 flex justify-center place-items-center rounded h-10 font-mono">
                Animate
            </div>
        </div>
    );
};

export default ASCIITransformBox;
