import characterMatrices from '~/constants/fontMatrices';
import { asciiPrintStd } from '~/functions/asciiPrinting';
import toUpper from 'lodash/toUpper';

const Header = (props) => {
    const title = toUpper(props.title).split('');
    const titleWords = toUpper(props.title).split(' ');
    const colors = props.colors;
    const numbers = [1, 1.5, 2, 2.5, 1000];
    const symbol = '@';

    return (
        <div className="flex relative rounded p-2 h-1/9 gap-8">
            {titleWords.map((word, i) => (
                <div
                    className="relative"
                    style={{ width: `${word.length * 28}px` }}
                >
                    {numbers.map((number, j) => (
                        <div
                            className="flex gap-3 absolute top-[50%] translate-y-[-50%]"
                            style={{
                                color: `rgb(${colors[i][0] - colors[i][0] / number}, ${colors[i][1] - colors[i][1] / number}, ${colors[i][2] - colors[i][2] / number})`,
                                left: `${1.5 * j}px`,
                                bottom: `${-2 * j}px`,
                            }}
                        >
                            {word.split('').map((character, k) => (
                                <div className="flex flex-col">
                                    {characterMatrices[
                                        character.charCodeAt(0) - 65
                                    ].map((row, m) => (
                                        <div className="flex font-mono text-[6px]">
                                            {row.map((bit, j) => {
                                                return bit === 1 ? (
                                                    <div>{symbol}</div>
                                                ) : (
                                                    <div>&nbsp;</div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Header;
