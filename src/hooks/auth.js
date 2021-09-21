import { createContext, useContext, useState } from 'react';
//import { AuthService } from "../service/AuthService";
import { auth, firestore } from '../config/firebase';
import { useRouter } from 'next/router';

const authContext = createContext();

export default function useAuth() {
    return useContext(authContext)
}

export function AuthProvider(props) {
    const [user, setUser] = useState();
    const [clientId, setClientId] = useState();
    const [error, setError] = useState();
    const router = useRouter()
    /*
        const loginWithGoogle = async () => {
            const { error, user } = await AuthService.loinWithGoogle();
            setUser(user);
            setError(error ?? '');
        } */
    const logout = async () => {
        await auth.signOut();
        setUser(null);
        window.localStorage.removeItem('profile')
        window.localStorage.removeItem('clientId')
        //window.location.reload();
        //router.push('/sign-in/');
        //window.location.reload();
    }

    async function login(email, password) {

        await auth.signInWithEmailAndPassword(email, password);
        window.localStorage.setItem('profile', JSON.stringify(auth.currentUser));
        window.localStorage.setItem('clientId', auth.currentUser.uid);

    }

    async function signUp(email, password, firstName, lastName) {
        console.log("🚀 ~ file: auth.js ~ line 30 ~ signUp ~ email", email)
        console.log('signUp is working')
        //auth.createUserWithEmailAndPassword(email, password).then((user) => { console.log(user); });
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            const user = res.user;
            await firestore.collection("members").doc(user.uid).set({
                authProvider: "local",
                email,
                firstName,
                lastName,
                userRole: 'client',
                createAt: new Date().getTime()
            });
            alert('Sing up sucess');
            router.push('/account/')
        } catch (err) {
            console.error(err);
            setError(err.message);
            alert(err.message);
        }

    }

    const value = { user, clientId, error, setError, login, logout, setUser, signUp };

    return <authContext.Provider value={value} {...props} />;

}