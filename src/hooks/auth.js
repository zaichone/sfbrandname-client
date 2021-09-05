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

    const value = { user, error, loginWithGoogle, login, logout, setUser };

    return <authContext.Provider value={value} {...props} />;

}