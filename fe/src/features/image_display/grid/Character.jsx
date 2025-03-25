import { useState, useEffect } from 'react';
import max from 'lodash/max';
import indexOf from 'lodash/indexOf';

const Character = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [color, setColor] = useState("black");

    useEffect(() => {
        setColor(getCharColor(props.element));
        // naive saturation
        let maxIndex = indexOf(props.element.color, max(props.element.color));
        let rgb = props.element.color;
        rgb[maxIndex] = 255;
        //setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    }, []);

    useEffect(() => {
        setIsVisible(!props.filter.test(props.element.character));
    }, [props.filter]);

    const getCharColor = (elem) => {
        return `rgb(${elem.color[0]}, ${elem.color[1]}, ${elem.color[2]})`;
    };

    return (
        <span
            className="cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
            style={{
                color: color,
                opacity: isVisible ? 1 : 0.03,
            }}
            onMouseEnter={() => setIsVisible(false)}
        >
            {props.element.character}
        </span>
    );
};

export default Character;
