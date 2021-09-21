import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfile } from "../firebase/firebase.utils";
import { onSnapshot } from "@firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (userAuth) => {
            if(userAuth) {
                const userRef = await createUserProfile(userAuth);
                onSnapshot(userRef, (doc) => {
                    setCurrentUser({ id: doc.id, ...doc.data() });
                });
            }
            setCurrentUser(userAuth);
        });
        return () => {};
    },[]);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}