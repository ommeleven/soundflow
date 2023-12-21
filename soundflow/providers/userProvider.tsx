"use client";

interface UserProviderProps {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({
    children

}) => {
    return (
        <MyUserCOntextProvider>
            {children};
        </MyUserCOntextProvider>
    )
};

export default UserProvider;