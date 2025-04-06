import { useState } from 'react';

const DiscreteSlider = (props) => {
    const [position, setPosition] = useState(0);

    const handleClick = () => {
        if (position < props.nTicks) {
            setPosition(position + 1);
        }
    };

    return (
        <div
            className="mt-5 h-10 bg-blue-900 flex justify-center place-items-center"
            onClick={handleClick}
        >
            <div
                className="relative h-1 bg-black"
                style={{ width: `${props.width}px` }}
            >
                {Array.from(Array(props.nTicks + 1).keys()).map((key, n) => (
                    <div
                        className="absolute top-[50%] translate-y-[-50%] h-5 w-1 bg-black"
                        style={{
                            left: `${key * (props.width / props.nTicks)}px`,
                        }}
                    ></div>
                ))}
                <div
                    className="absolute top-[50%] translate-y-[-50%] rounded-full h-5 w-5 bg-red-500"
                    style={{
                        left: `${position * (props.width / props.nTicks) - 5}px`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default DiscreteSlider;
