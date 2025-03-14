import ModeBox from '../features/toolboxes/ModeBox';
import DownloadBox from '../features/toolboxes/DownloadBox';
import GridBox from '../features/toolboxes/GridBox';
import GrayscaleBox from '../features/toolboxes/GrayscaleBox';
import ASCIITransformBox from '../features/toolboxes/ASCIITransformBox';
import Grid from "../features/grid/Grid";
import { ToolboxProvider } from '../contexts/ToolboxContext';

const Home = (props) => {
    return (
        <ToolboxProvider>
            <div className="flex w-full h-full place-items-center gap-2">
                <div className="flex flex-col h-full w-1/9 gap-2 p-2">
                    <ModeBox />
                    <DownloadBox />
                </div>
                <div className="relative h-full w-6/9 overflow-hidden flex justify-center place-items-center drop-shadow-md">
                    <img src={'/skull.png'} alt="asciify it" />
                        <Grid />
                </div>
                <div className="h-full w-2/9 flex flex-col gap-2 p-2">
                    <GridBox />
                    <GrayscaleBox />
                    <ASCIITransformBox />
                </div>
            </div>
        </ToolboxProvider>
    );
};

export default Home;
