import axios from 'axios';
import { useState, useRef } from 'react';
import { useToolbox } from '~/contexts/ToolboxContext';

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
        <div className="w-full h-30 flex gap-2 place-items-center justify-left">
            <textarea
                ref={textAreaRef}
                onChange={handleTyping}
                className="w-2/4 h-6/9 outline-none border border-amber-900 resize-none text-amber-500 font-mono text-xs py-1 px-2 rounded animate-pulse"
                placeholder="What shall we create?"
            ></textarea>
            <div
                className="cursor-pointer flex place-items-center justify-center w-25 h-6/9 bg-linear-to-br from-neutral-800 to-black rounded-lg hover:bg-neutral-900 text-neutral-200 hover:text-green-500"
                onClick={handleImageRequest}
            >
                <div className="bg-linear-to-br from-neutral-800 to-neutral-900 w-7/9 h-7/9 flex place-items-center justify-center rounded-lg">
                    <div className="font-mono text-xs">Exec</div>
                </div>
            </div>
        </div>
    );
};

export default PromptBox;
