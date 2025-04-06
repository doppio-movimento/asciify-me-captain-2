const OnOffSwitch = (props) => {
    return (
        <div className="h-1/7 w-full flex justify-center place-items-center cursor-pointer">
            <div
                className="w-2/7 h-2 rounded-xl relative"
                style={{
                    backgroundColor: props.on ? 'rgb(30,30,30)' : 'rgb(5,5,5)',
                }}
                onClick={() => props.setOn(!props.on)}
            >
                <div
                    className="absolute top-[50%] translate-y-[-50%] z-10 w-4 h-4 rounded-full"
                    style={{
                        left: props.on ? 0 : '85%',
                        backgroundImage: props.on
                            ? 'linear-gradient(20deg, rgb(50,50,50), rgb(55,55,55), rgb(100,100,100), rgb(150,150,150)'
                            : 'linear-gradient(20deg, rgb(10,10,10), rgb(15,15,15), rgb(60,60,60), rgb(150,150,150))',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default OnOffSwitch;
