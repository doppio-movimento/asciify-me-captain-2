import Grid from './grid/Grid';
import { useToolbox } from '../../contexts/ToolboxContext';

const ImageDisplay = (props) => {
    const { frameOn } = useToolbox();

    return (
        <div
            className="border relative h-full w-6/9 overflow-hidden flex justify-center place-items-center drop-shadow-md"
            style={{ borderColor: frameOn ? 'white' : 'transparent' }}
        >
            <img src={'/planet.png'} alt="asciify it" />
            <Grid />
        </div>
    );
};

export default ImageDisplay;
