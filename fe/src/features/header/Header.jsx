const Header = (props) => {
    return (
        <div
            className="px-5 py-3 text-cyan-400 text-2xl w-max"
            style={{ textShadow: '#000 4px 4px', fontFamily: 'Ubuntu Mono' }}
        >
            {props.title}
        </div>
    );
};

export default Header;
