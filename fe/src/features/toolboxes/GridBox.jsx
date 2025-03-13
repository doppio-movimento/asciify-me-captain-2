const GridBox = (props) => {
    return (
        <div className="h-2/5 border border-fuchsia-900">
            <div className="flex flex-col h-full place-items-center gap-5">
                <div className="flex pt-3 font-mono text-sm text-white h-1/7">
                    Grid
                </div>
                <div className="relative h-1/7 w-full flex justify-center">
                    <div className="w-4/7 bg-black h-4 rounded-xl bg-gray-950 relative">
                        <div className="absolute top-[50%] translate-y-[-50%] z-10 w-7 h-7 rounded-full bg-blue-400 text-xs flex justify-center place-items-center">
                            ON
                        </div>
                        <div className="absolute top-[50%] translate-y-[-50%] right-4 text-orange-500 font-mono text-xs">
                            Turn off
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-2/3 h-1/7">
                    <div className="text-blue-400 font-mono text-xs">Color</div>
                    <div className="w-5 h-5 bg-orange-500"></div>
                </div>
                <div className="flex justify-between w-2/3 h-1/7">
                    <div className="text-blue-400 font-mono text-xs">Frame</div>
                    <div className="w-5 h-5 bg-gray-500 border border-blue-500"></div>
                </div>
                <div className="flex justify-between w-2/3">
                    <div className="text-blue-400 font-mono text-xs">
                        Freeform
                    </div>
                    <div className="w-5 h-5 bg-gray-500 border border-blue-500"></div>
                </div>
                <div className="h-2/7 w-full flex flex-col place-items-center gap-2 mb-2">
                    <div className="text-blue-500 font-mono flex justify-center text-xs">
                        Granularity
                    </div>
                    <div className="border-solid border-r-gray-950 border-r-130 border-y-transparent border-y-8 border-l-0 relative">
                        <div className="absolute w-6 h-6 bg-blue-500 rounded-full top-[50%] translate-y-[-50%] left-23"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridBox;
