import { useToolbox } from '../../../../contexts/ToolboxContext';
import { useState, useEffect, useRef } from 'react';

const GranularitySlider = (props) => {
    const { granularity, setGranularity } = useToolbox();
    const [containerRect, setContainerRect] = useState(null);
    const [sliderRect, setSliderRect] = useState(null);
    const [mouseDown, setMouseDown] = useState(false);
    const [position, setPosition] = useState(0);
    const [initialDelta, setInitialDelta] = useState(0);
    const [sliderMoved, setSliderMoved] = useState(false);

    const sliderRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        setContainerRect(containerRef.current.getBoundingClientRect());
        setSliderRect(sliderRef.current.getBoundingClientRect());
    }, []);

    const handleMouseMove = (e) => {
        if (mouseDown) {
            if (!sliderMoved) {
                setSliderMoved(true);
            }
            let cursorRelative = e.clientX - containerRect.left;
            console.log(cursorRelative - initialDelta);

            if (
                cursorRelative - initialDelta >= 0 &&
                cursorRelative - initialDelta <= 117
            ) {
                setPosition(cursorRelative - initialDelta);
            }
            if (position) {
                setGranularity(parseInt(position) * parseInt(position));
            }
        }
    };

    const handleMouseDown = (e) => {
        let cursorRelative = e.clientX - containerRect.left;
        let x1 = sliderRef.current.offsetLeft;
        let x2 = cursorRelative;
        setInitialDelta(x2 - x1);
        setMouseDown(true);
    };

    return (
        <div className="h-2/7 w-full flex flex-col place-items-center gap-2 mb-2">
            <div className="text-cyan-500 font-mono flex justify-center text-xs">
                Granularity
            </div>
            <div
                className="relative"
                ref={containerRef}
                onMouseLeave={() => setMouseDown(false)}
                onMouseMove={(e) => handleMouseMove(e)}
            >
                <div className="border-solid border-r-cyan-950 border-r-130 border-y-transparent border-y-8 border-l-0 relative"></div>
                <div
                    className="absolute w-6 h-6 bg-cyan-500 rounded-full top-[50%] translate-y-[-50%] cursor-pointer"
                    ref={sliderRef}
                    style={{ left: position + (sliderMoved ? 'px' : '') }}
                    onMouseDown={(e) => handleMouseDown(e)}
                    onMouseUp={() => setMouseDown(false)}
                ></div>
            </div>
        </div>
    );
};

export default GranularitySlider;
