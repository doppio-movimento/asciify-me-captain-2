const Home = (props) => {
    return (
        <div className="flex w-full h-full place-items-center gap-2">
            <div className="flex flex-col h-full w-1/9 gap-2 p-2">
                <div className="h-1/3 border border-teal-900 w-full"></div>
                <div className="h-1/3 border border-teal-900 w-full"></div>
            </div>
            <div className="h-full w-6/9 overflow-hidden flex justify-center place-items-center rounded">
                <img src={"/blackhole.png"} alt="asciify it"/>
            </div>
            <div className="h-full w-2/9 flex flex-col gap-2 p-2">
                <div className="h-2/5 border border-teal-900"></div>
                <div className="h-1/5 border border-teal-900"></div>
                <div className="h-2/5 border border-teal-900"></div>
            </div>
        </div>
    );
};

export default Home;
