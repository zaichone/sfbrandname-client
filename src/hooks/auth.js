import { createContext, useContext, useState } from 'react';
import { AuthService } from "../service/AuthService";
import {auth} from '../config/firebase';

const authContext = createContext();

export default function useAuth() {
    return useContext(authContext)
}

export function AuthProvider(props) {
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const loginWithGoogle = async () => {
        const { error, user } = await AuthService.loinWithGoogle();
        setUser(user);
        setError(error ?? '');
    }
    const logout = async () => {
        await AuthService.logout();
        setUser(null);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signUp(email, password, firstName, lastName){
        console.log("🚀 ~ file: auth.js ~ line 30 ~ signUp ~ email", email)
        console.log('signUp is working')
        return AuthService.signUp(email, password,firstName, lastName);
        //return auth.createUserWithEmailAndPassword(email, password).then((user) => { console.log(user); });
    }

    const value = { user, error, loginWithGoogle, login, logout, setUser, signUp };

    return <authContext.Provider value={value} {...props} />;

}