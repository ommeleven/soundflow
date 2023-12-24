"use client";

import { useSupabaseClient,
        useSessionContext 
} from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    return  (
        <Modal
            title="welcome back"
            description="login to your account"
            isOpen
            onChange = {() => {}}    
        >
            <Auth
                supabaseClient={supabaseClient}
            />
        </Modal>
        


    );
}


export default AuthModal;