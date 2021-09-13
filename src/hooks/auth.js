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
        window.location.reload();
        router.push('/sign-in/')
    }

    async function login(email, password) {
        await auth.signInWithEmailAndPassword(email, password)
        router.push('/account/')
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

    const value = { user, error, setError, login, logout, setUser, signUp };

    return <authContext.Provider value={value} {...props} />;

}