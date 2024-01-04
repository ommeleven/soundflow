import Modal from "./Modal"

const UploadModal = () => {
    return (
        <Modal
            title="upload modal title"
            description="upload modal description"
            isOpen
            onChange={() => {}}
        >
            Upload Content
        </Modal>
    )
}

export default UploadModal;