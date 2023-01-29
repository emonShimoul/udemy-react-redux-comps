import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && <Modal></Modal>}
        </div>
    );
};

export default ModalPage;