import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && <Modal onClose={handleClose}></Modal>}
        </div>
    );
};

export default ModalPage;