import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if ((user)) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
        return () => unsubscribed;
    }, [auth]);

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('logged out');
            })
            .catch(error => {
                setError(error.message);
            })
    };

    return {
        user,
        error,
        loginWithGoogle,
        logout
    }
}

export default useFirebase;