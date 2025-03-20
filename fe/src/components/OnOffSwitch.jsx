const OnOffSwitch = (props) => {
    return (
        <div className="relative h-1/7 w-full flex justify-center cursor-pointer">
            <div
                className="w-4/7 bg-black h-4 rounded-xl relative"
                style={{ backgroundColor: props.on ? 'rgb(100,100,100)' : 'rgb(10,10,10)' }}
                onClick={() => props.setOn(!props.on)}
            >
                <div
                    className="absolute top-[50%] translate-y-[-50%] z-10 w-7 h-7 rounded-full text-xs flex justify-center place-items-center font-mono"
                    style={{
                        left: props.on ? 0 : '85%',
                        backgroundColor: props.on ? 'rgb(200,200,200)' : 'rgb(20,20,20)',
                    }}
                >
                </div>
            </div>
        </div>
    );
};

export default OnOffSwitch;
