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
                console.log(user);
                const destination = location?.state?.from || '/';
                saveUser(user?.email, user?.displayName, 'POST');
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
        user.role = 'user';
        console.log(user);

        fetch('http://localhost:5000/users', {
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
        const unsubscribed = onAuthStateChanged(auth, user => {
            if ((user)) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });

        return () => unsubscribed;
    }, [auth]);

    // Sign out
    const logout = () => {
        setLoading(true);

        signOut(auth)
            .then(() => {
                console.log('logged out');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // Admin status
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
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