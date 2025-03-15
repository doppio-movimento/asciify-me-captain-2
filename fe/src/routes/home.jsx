import ModeBox from '../features/toolboxes/mode/ModeBox';
import DownloadBox from '../features/toolboxes/download/DownloadBox';
import GridBox from '../features/toolboxes/grid/GridBox';
import GrayscaleBox from '../features/toolboxes/grayscale/GrayscaleBox';
import ASCIITransformBox from '../features/toolboxes/ascii_transform/ASCIITransformBox';
import ImageDisplay from "../features/image_display/ImageDisplay";
import { ToolboxProvider } from '../contexts/ToolboxContext';

const Home = (props) => {
    return (
        <ToolboxProvider>
            <div className="flex w-full h-full place-items-center gap-2">
                <div className="flex flex-col h-full w-1/9 gap-2 p-2">
                    <ModeBox />
                    <DownloadBox />
                </div>
                <ImageDisplay />
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
