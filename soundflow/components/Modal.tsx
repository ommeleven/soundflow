import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    title: string;
    isOpen: boolean;
    onChange: (open: boolean) => void;
    description: string;
    children: React.ReactNode;

}

const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    onChange,
    description,
    children
}) => {
    return (
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
           <Dialog.Portal>
                <Dialog.Overlay 
                    className="
                        bg-neutral-900/90
                        backdrop-blur-sm
                        fixed
                        inset-0
                    "
                />
                    <Dialog.Content
                        className="
                            fixed
                            drop-shadow-md
                            border
                            border-neutral-700
                            top-[50%]
                            left-[50%]
                            max-h-full
                            h-full
                            md:h-auto
                            md:amx-h-[85vh]
                            w-full
                            md:w-[90pvw]
                            md:max-w-[450px]
                            translate-x-[-50%]
                            translate-y-[-50%]
                            rounded-md
                            p-[25px]
                            focus:outline-none
                            "
                            >
                                <Dialog.Title
                                    className="
                                        text-xl
                                        text-center
                                        font-bold
                                        mb-4
                                    "
                                >
                                        {title}
                                </Dialog.Title>
                                <Dialog.Description
                                    className="
                                        md-5
                                        text-sm
                                        leading-normal
                                        text-center
                                    "
                                >
                                    <div>
                                        {children}
                                    </div>
                                    <Dialog.Close asChild>
                                        <button 
                                            className="
                                                text-neutral-400
                                                hover:text-white
                                                absolute
                                                top-[10px]
                                                right-[10px]
                                                inline-flex
                                                h-[25px]
                                                w-[25px]
                                                appearance-none
                                                items-center
                                                justify-center
                                                rounded-full
                                                focus:outline-none
                                                ">
                                            <IoMdClose />
                                        </button>
                                    </Dialog.Close>

                                </Dialog.Description>
                    </Dialog.Content>


           </Dialog.Portal>

        </Dialog.Root>


    );
} 

export default Modal;