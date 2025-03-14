const ModeBox = (props) => {
    return (
        <div className="h-1/3 border border-cyan-900 w-full rounded">
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
    );
};

export default ModeBox;
