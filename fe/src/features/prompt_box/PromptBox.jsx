import axios from 'axios';
import { useState, useRef } from 'react';
import { useToolbox } from "~/contexts/ToolboxContext";

axios.defaults.baseURL = `http://${window.location.hostname}:8000`;

const PromptBox = (props) => {
    const { setImageUrl, setImageLoading } = useToolbox();
    var promptText = '';
    const textAreaRef = useRef(null);

    const handleTyping = () => {
        promptText = textAreaRef.current.value;
    };

    const handleImageRequest = async () => {
        setImageLoading(true);
        await axios
            .post('api/request_ai_image', { promptText: promptText })
            .then((response) => {
                setImageUrl(response.data.imageUrl);
                setImageLoading(false);
            });
    };

    return (
        <div className="w-6/9 h-30 bg-neutral-950 border-1 p-1 flex flex-col gap-2 place-items-center">
            <textarea
                ref={textAreaRef}
                onChange={handleTyping}
                className="w-full h-6/9 outline-none border border-neutral-900 resize-none text-cyan-500 font-mono text-xs py-1 px-2"
                placeholder="What would you like to create?"
            ></textarea>
            <div
                className="flex place-items-center justify-center w-full h-3/9 bg-cyan-700 font-mono rounded hover:bg-cyan-600"
                onClick={handleImageRequest}
            >
                ASCIIFY
            </div>
        </div>
    );
};

export default PromptBox;
