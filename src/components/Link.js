import React from 'react';
import classNames from 'classnames';
import useNavigation from '../hooks/useNavigation';

const Link = ({ to, children }) => {
    const { navigate } = useNavigation();

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