import React, { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);

    const classes = classNames('text-blue-500');

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
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    );
};

export default Link;