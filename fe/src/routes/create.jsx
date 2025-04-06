import ModeBox from '~/features/toolboxes/mode/ModeBox';
import DownloadBox from '~/features/toolboxes/download/DownloadBox';
import ToolBox from '~/features/toolbox/ToolBox';
import GrayscaleBox from '~/features/toolboxes/grayscale/GrayscaleBox';
import ASCIITransformBox from '~/features/toolboxes/ascii_transform/ASCIITransformBox';
import ImageDisplay from "~/features/image_display/ImageDisplay";
import PromptBox from "~/features/prompt_box/PromptBox";
import DiscreteSlider from "~/components/DiscreteSlider";
import { ToolboxProvider } from '~/contexts/ToolboxContext';

const Create = (props) => {
    return (
        <ToolboxProvider>
            <div className="w-full h-full">
                <div className="flex flex-col w-full h-full">
                    <ImageDisplay />
                    <DiscreteSlider width={200} nTicks={3}/>
                </div>
            </div>
        </ToolboxProvider>
    );
};

export default Create;
