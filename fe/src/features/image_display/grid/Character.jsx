import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import max from 'lodash/max';
import indexOf from 'lodash/indexOf';

const Character = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [color, setColor] = useState("black");
    const isFirstRender = useRef(true);
    const characterRef = useRef(null);

    useEffect(() => {
        setColor(getCharColor(props.element));
        // naive saturation
        let maxIndex = indexOf(props.element.color, max(props.element.color));
        let rgb = props.element.color;
        rgb[maxIndex] = 255;
        //setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    }, []);

    useLayoutEffect(() => {
        if (!props.filter.test(props.element.character) && !isVisible) {
            gsap.to(characterRef.current, {opacity: 1, duration: 2});
            setIsVisible(true);
        }
        if (props.filter.test(props.element.character) && isVisible) {
            gsap.to(characterRef.current, {opacity: 0.1, duration: 2});
            setIsVisible(false);
        }
    }, [props.filter]);

    const getCharColor = (elem) => {
        return `rgb(${elem.color[0]}, ${elem.color[1]}, ${elem.color[2]})`;
    };

    return (
        <span
            ref={characterRef}
            className="ascii-character select-none"
            onClick={() => setIsVisible(!isVisible)}
            style={{
                color: color,
            }}
            onMouseEnter={() => setIsVisible(false)}
        >
            {props.element.character}
        </span>
    );
};

export default Character;
