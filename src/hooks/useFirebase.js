import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const useFirebase = () => {
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        /* .catch(error => {
            const error = error.message;
            console.log(error);
        }) */
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('logged out');
            })
            .catch(error => {
                console.log(error);
            })
    };

    return {
        loginWithGoogle,
        logout
    }
}

export default useFirebase;