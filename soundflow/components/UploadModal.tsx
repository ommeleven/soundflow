"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";

const UploadModal = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            author: '',
            song: null,
            image: null,
        }
    })

    const [isLoading, setIsLoading] = useState();

    const uploadModal = useUploadModal();
    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();        }
    } 

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //upload to Supabase
    }
    return (
        <Modal
            title="add a song"
            description="upload an mp3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            
            <form 
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input 
                    id='title'
                    disabled={isLoading}
                    {...register('title', {required: true})}
                    placeHolder='Song title'
                />
            </form>
        </Modal>
    )
}

export default UploadModal;