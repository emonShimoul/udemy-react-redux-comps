import React, { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        // console.log(event);

        // so that user open the new tab by pressing ctrl key on any link
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        navigate(to);
    }

    return (
        <a href={to} onClick={handleClick}>{children}</a>
    );
};

export default Link;