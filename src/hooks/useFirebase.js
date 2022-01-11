import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // Signin with Google
    const loginWithGoogle = (location, navigate) => {
        setLoading(true);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result?.user;
                const destination = location?.state?.from || '/';
                saveUser(user?.email, user?.displayName, 'PUT');
                setError('');
                navigate(destination);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, name: displayName };

        fetch('https://agile-tor-11686.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => {

            })
    };

    // On auth state changed
    useEffect(() => {
        setLoading(true);

        const unsubscribed = onAuthStateChanged(auth, user => {
            if ((user)) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });

        return () => unsubscribed;
    }, [auth]);

    // Sign out
    const logout = () => {
        setLoading(true);

        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Admin status
    useEffect(() => {
        fetch(`https://agile-tor-11686.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [user?.email]);

    return {
        user,
        admin,
        error,
        loading,
        loginWithGoogle,
        logout
    }
}

export default useFirebase;