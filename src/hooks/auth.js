import { createContext, useContext, useState } from 'react';
//import { AuthService } from "../service/AuthService";
import {auth} from '../config/firebase';
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
        await auth.logout();
        setUser(null);
    }

    function login(email, password) {
        console.log('hire');
        auth.signInWithEmailAndPassword(email, password)
        router.push('/account/')
    }

    function signUp(email, password, firstName, lastName){
        console.log("🚀 ~ file: auth.js ~ line 30 ~ signUp ~ email", email)
        console.log('signUp is working')
        return auth.signUp(email, password).then((user) => { console.log(user); });
        //return auth.createUserWithEmailAndPassword(email, password).then((user) => { console.log(user); });
    }

    const value = { user, error, setError, login, logout, setUser, signUp };

    return <authContext.Provider value={value} {...props} />;

}