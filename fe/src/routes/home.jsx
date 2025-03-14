import ModeBox from '../features/toolboxes/ModeBox';
import DownloadBox from '../features/toolboxes/DownloadBox';
import GridBox from '../features/toolboxes/GridBox';
import GrayscaleBox from '../features/toolboxes/GrayscaleBox';
import ASCIITransformBox from '../features/toolboxes/ASCIITransformBox';

const Home = (props) => {
    const granularity = 7000;

    return (
        <div className="flex w-full h-full place-items-center gap-2">
            <div className="flex flex-col h-full w-1/9 gap-2 p-2">
                <ModeBox />
                <DownloadBox />
            </div>
            <div className="relative h-full w-6/9 overflow-hidden flex justify-center place-items-center rounded drop-shadow-md">
                <img src={'/blackhole.png'} alt="asciify it" />
                <div className="absolute grid grid-flow-row z-10 w-full h-full">
                    {Array.from(Array(Math.trunc(Math.sqrt(granularity))).keys()).map((key, index) => (
                        <div className="w-full h-[1px] bg-amber-500"></div>
                    ))}
                </div>
                <div className="absolute grid grid-flow-col z-10 w-full h-full">
                    {Array.from(Array(Math.trunc(Math.sqrt(granularity))).keys()).map((key, index) => (
                        <div className="w-[1px] h-full bg-amber-500"></div>
                    ))}
                </div>
            </div>
            <div className="h-full w-2/9 flex flex-col gap-2 p-2">
                <GridBox />
                <GrayscaleBox />
                <ASCIITransformBox />
            </div>
        </div>
    );
};

export default Home;
