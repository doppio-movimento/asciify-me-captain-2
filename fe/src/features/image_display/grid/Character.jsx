import { useState, useEffect } from 'react';

const Character = (props) => {
    const [isVisible, setIsVisible] = useState(true);

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
                color: getCharColor(props.element),
                opacity: isVisible ? 1 : 0,
            }}
        >
            {props.element.character}
        </span>
    );
};

export default Character;
