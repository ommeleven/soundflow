"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal"

const UploadModal = () => {

    const uploadModal = useUploadModal();
    const onChange = (open: boolean) => {
        if (!open) {
            uploadModal.onClose();        }
    } 
    return (
        <Modal
            title="upload modal title"
            description="upload modal description"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            Upload Content
        </Modal>
    )
}

export default UploadModal;