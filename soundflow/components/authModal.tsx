"use client";

import Modal from "./Modal";

const AuthModal = () => {
    return  (
        <Modal
            title="welcome back"
            description="login to your account"
            isOpen
            onChange = {() => {}}    
        >
            auth modal children
        </Modal>


    );
}


export default AuthModal;