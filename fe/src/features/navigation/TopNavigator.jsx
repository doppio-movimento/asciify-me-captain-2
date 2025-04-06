import { NavLink } from 'react-router-dom';

const TopNavigator = (props) => {
    return (
        <div className="mx-8 px-10 h-full flex gap-8 justify-center place-items-center border border-pink-500">
            {props.links.map((link, n) => (
                <NavLink
                    to={link}
                    className="cursor-pointer text-orange-100 hover:text-white"
                    style={{
                        textDecoration: 'none',
                        fontFamily: 'Ubuntu Mono',
                        textShadow: '#000 4px 4px',
                    }}
                >
                    {({ isActive }) => (
                        <div
                            style={{
                                color: `${isActive ? 'rgb(0,217,254)' : 'rgb(255,255,220)'}`,
                            }}
                        >
                            {link}
                        </div>
                    )}
                </NavLink>
            ))}
        </div>
    );
};

export default TopNavigator;
