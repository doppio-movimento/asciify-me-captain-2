const LoadingSpinner = (props) => {
    return (
        <div className="relative w-4/5 h-1/2">
            <div className="absolute top-[50%] left-[50%] -translate-[50%] text-cyan-200 font-mono text-xs animate-ping">Loading</div>
            <div className="absolute bottom-0 left-[50%] -translate-x-[50%] text-amber-400 font-mono text-xs animate-bounce">&</div>
            <div className="absolute bottom-0 left-[40%] text-green-400 font-mono text-xs animate-bounce">$</div>
            <div className="absolute bottom-0 left-[60%] text-green-400 font-mono text-xs animate-bounce">$</div>
        </div>
    );
};

export default LoadingSpinner;
