const LoadingSpinner = (props) => {
    return (
        <div className="relative w-4/5 h-1/2">
            <div className="absolute top-[50%] left-[50%] -translate-[50%] text-cyan-200 font-mono text-xs animate-ping">
                Loading
            </div>
        </div>
    );
};

export default LoadingSpinner;
