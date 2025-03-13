const DownloadBox = (props) => {
    return (
        <div className="h-1/3 border border-fuchsia-900 w-full">
            <div className="flex flex-col h-full">
                <div className="flex justify-center place-items-center text-sm font-mono text-white pt-3 h-1/5">
                    Download
                </div>
                <div className="flex flex-col justify-center place-items-center h-4/5 gap-6">
                    <div className="w-2/3 h-1/3 bg-yellow-500 rounded-2xl flex flex-col justify-center place-items-center">
                        <div className="">JPEG</div>
                        <div className="">&#9660;</div>
                    </div>
                    <div className="w-2/3 h-1/3 bg-blue-500 rounded-2xl flex flex-col justify-center place-items-center">
                        <div className="">TXT</div>
                        <div className="">&#9660;</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadBox;
