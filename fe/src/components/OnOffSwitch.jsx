const OnOffSwitch = (props) => {
    return (
        <div className="relative h-1/7 w-full flex justify-center cursor-pointer">
            <div
                className="w-4/7 bg-black h-4 rounded-xl relative"
                style={{ backgroundColor: props.on ? 'blue' : 'orange' }}
                onClick={() => props.setOn(!props.on)}
            >
                <div
                    className="absolute top-[50%] translate-y-[-50%] z-10 w-7 h-7 rounded-full text-xs flex justify-center place-items-center"
                    style={{
                        left: props.on ? 0 : '85%',
                        backgroundColor: props.on ? 'cyan' : 'red',
                    }}
                >
                    {props.on ? 'ON' : 'OFF'}
                </div>
            </div>
        </div>
    );
};

export default OnOffSwitch;
