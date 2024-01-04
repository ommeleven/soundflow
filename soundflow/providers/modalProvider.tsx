"use client";

import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import AuthModal from "@/components/authModal";
import { useEffect, useState } from "react";

const ModalProvider =  () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [] );

    if (!isMounted) {
        return null;
    }
    
    return  (
        <><AuthModal />
        <UploadModal /></>
        );
}

export default ModalProvider;