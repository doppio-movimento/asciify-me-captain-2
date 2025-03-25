import ModeBox from '~/features/toolboxes/mode/ModeBox';
import DownloadBox from '~/features/toolboxes/download/DownloadBox';
import GridBox from '~/features/toolboxes/grid/GridBox';
import GrayscaleBox from '~/features/toolboxes/grayscale/GrayscaleBox';
import ASCIITransformBox from '~/features/toolboxes/ascii_transform/ASCIITransformBox';
import ImageDisplay from "~/features/image_display/ImageDisplay";
import PromptBox from "~/features/prompt_box/PromptBox";
import { ToolboxProvider } from '~/contexts/ToolboxContext';

const Home = (props) => {
    return (
        <ToolboxProvider>
            <div className="w-full h-full">
        {/*<div className="flex flex-col h-full w-1/9 gap-2 p-2">
                    <ModeBox />
                    <DownloadBox />
                </div>*/}
                <div className="flex flex-col w-full h-full">
                    <ImageDisplay />
                    <div className="flex w-full">
                        <PromptBox />
                        <GridBox />
                    </div>

                </div>
        {/*<div className="h-full w-1/9 flex flex-col gap-2">
                    <GridBox />
                    <GrayscaleBox />
                    <ASCIITransformBox />
                </div>*/}
            </div>
        </ToolboxProvider>
    );
};

export default Home;
