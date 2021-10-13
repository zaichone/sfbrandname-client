// this file is actively used, the other one isnt

import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const loginWithEmailAndPassword = async (email, password) => {
    const { error, user } = await AuthService.loginWithEmailAndPassword(
      email,
      password
    );
    setUser(user ?? null);
    setError(error ?? "");
  };

  const signUp = async (email, password, firstName, lastName) => {
    const { error, user } = await AuthService.signUpWithEmailAndPassword(
      email,
      password,
      firstName,
      lastName
    );
    setUser(user ?? null);
    setError(error ?? "");
    window.location.reload();
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const value = {
    user,
    error,
    setError,
    loginWithGoogle,
    loginWithEmailAndPassword,
    signUp,
    logout,
    setUser,
  };

  return <authContext.Provider value={value} {...props} />;
}
