import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import max from 'lodash/max';
import min from 'lodash/min';
import indexOf from 'lodash/indexOf';
import { useToolbox } from "~/contexts/ToolboxContext";

const Character = (props) => {
    const { saturation } = useToolbox();
    const [character, setCharacter] = useState(props.element.character);
    const [isVisible, setIsVisible] = useState(true);
    const [color, setColor] = useState("black");
    const isFirstRender = useRef(true);
    const characterRef = useRef(null);

    useEffect(() => {
        setColor(getCharColor(props.element));
        // naive saturation
        let maxIndex = indexOf(props.element.color, max(props.element.color));
        let rgb = props.element.color;
        rgb[maxIndex] = rgb[maxIndex] * saturation;
        //setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    }, []);

    const handleInput = (e) => {
        let content = e.target.innerText;
        if (content.length === 1) {
            setCharacter(content);
        } else if (content.length === 0) {
            setCharacter(' ');
        } else {
            setCharacter(' ');
        }
    };

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
            contentEditable="true"
            ref={characterRef}
            className="ascii-character"
            onInput={handleInput}
            style={{
                color: color,
            }}
            onMouseEnter={() => setIsVisible(false)}
        >
            {character}
        </span>
    );
};

export default Character;
