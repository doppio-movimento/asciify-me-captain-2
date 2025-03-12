const SideNavigator = (props) => {
    const items = [
        {
            title: 'Upload',
            description: 'ASCII-fy an image from your computer',
        },
        {
            title: 'Prompt',
            description: 'Generate ASCII art with artificial intelligence',
        },
        { title: 'Freehand', description: 'Draw and ASCII-fy a picture' },
        { title: 'Random', description: 'Get random ASCII art' },
    ];
    return (
        <div className="flex flex-col w-1/3 rounded border-5 border-black font-mono">
            <div className="flex h-1/9 bg-black">
                <div className="flex justify-center place-items-center w-1/2 cursor-pointer text-teal-500 hover:bg-teal-900 hover:text-black">
                    Tools
                </div>
                <div className="flex justify-center place-items-center w-1/2 cursor-pointer text-teal-500 hover:bg-teal-900 hover:text-black">
                    Gallery
                </div>
            </div>
            <div className="flex flex-col h-8/9">
                {items.map((item, index) => (
                    <div className="flex justify-left place-items-center w-full border-t-2 border-black h-1/4 gap-10 pl-10 cursor-pointer hover:bg-teal-600">
                        <div className="text-teal-300">{item.title}</div>
                        <div className="text-white font-thin text-sm">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideNavigator;
