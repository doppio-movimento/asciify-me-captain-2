const Home = (props) => {
    return (
        <div className="flex w-full h-full place-items-center gap-2">
            <div className="flex flex-col h-full w-1/9 gap-2 p-2">
                <div className="h-1/3 border border-fuchsia-900 w-full">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-center place-items-center text-sm font-mono text-white pt-3 h-1/5">
                            Mode
                        </div>
                        <div className="flex justify-center place-items-center h-4/5">
                            <div className="relative h-7/9 bg-black w-5 rounded-2xl">
                                <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-10 h-10 bg-red-700 rounded-full flex justify-center place-items-center text-xs font-mono">
                                    HARD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-1/3 border border-fuchsia-900 w-full">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-center place-items-center text-sm font-mono text-white pt-3 h-1/5">
                            Download
                        </div>
                        <div className="flex flex-col justify-center place-items-center h-4/5 gap-6">
                            <div className="w-2/3 h-1/3 bg-yellow-500 rounded-2xl flex flex-col justify-center place-items-center">
                                <div className="">JPEG</div>
                                <div className="">&#9660;</div>
                            </div>
                            <div className="w-2/3 h-1/3 bg-blue-500 rounded-2xl flex flex-col justify-center place-items-center">
                                <div className="">TXT</div>
                                <div className="">&#9660;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-6/9 overflow-hidden flex justify-center place-items-center rounded">
                <img src={'/blackhole.png'} alt="asciify it" />
            </div>
            <div className="h-full w-2/9 flex flex-col gap-2 p-2">
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
                            <div className="text-blue-400 font-mono text-xs">
                                Color
                            </div>
                            <div className="w-5 h-5 bg-orange-500"></div>
                        </div>
                        <div className="flex justify-between w-2/3 h-1/7">
                            <div className="text-blue-400 font-mono text-xs">
                                Frame
                            </div>
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
                <div className="h-1/5 border border-fuchsia-900">
                    <div className="flex flex-col h-full place-items-center gap-1">
                        <div className="flex pt-2 font-mono text-sm text-white h-1/4">
                            Grayscale
                        </div>
                        <div className="h-2/4 w-full flex flex-col gap-3">
                            <div className="flex justify-between px-5">
                                <div className="font-mono text-xs text-blue-400">
                                    Standard
                                </div>
                                <div className="font-mono text-xs text-blue-700">
                                    Custom
                                </div>
                            </div>
                            <div className="flex justify-between px-5">
                                <div className="flex gap-2">
                                    <div className="w-6 h-6 bg-neutral-400 border border-blue-400 flex justify-center place-items-center text-xs font-mono">
                                        70
                                    </div>
                                    <div className="font-mono text-xs text-yellow-500 flex justify-center place-items-center">
                                        chars
                                    </div>
                                </div>
                                <div className="text-yellow-700 font-mono text-xs flex justify-center place-items-center">
                                    Input chars
                                </div>
                            </div>
                        </div>
                        <div className="h-1/4 w-full flex justify-center place-items-center">
                            <div className="w-2/3 h-3 bg-gray-950 relative rounded-xl">
                                <div className="absolute top-[50%] translate-y-[-50%] w-6 h-6 rounded-full bg-blue-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
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

                    <div className="w-1/3 bg-blue-500 flex justify-center place-items-center rounded h-10">
                        Animate
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
