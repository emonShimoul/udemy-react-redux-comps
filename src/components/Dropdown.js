import React, { useState } from 'react';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // setIsOpen(!isOpen);    // is also work vast vast vast majority of scenario
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const renderedOptions = options.map((option) => {
        return <div key={option.value}>{option.label}</div>;
    });

    return (
        <div>
            <div onClick={handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
};

export default Dropdown;