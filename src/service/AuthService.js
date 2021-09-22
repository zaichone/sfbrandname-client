import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthService = {
	loginWithGoogle: async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		try {
			const userCred = await firebase.auth().signInWithPopup(provider);
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	},
    loginWithEmailAndPassword: async (email, password) => {
		const provider = new firebase.auth.GoogleAuthProvider();
		try {
			const userCred = await firebase.auth().signInWithEmailAndPassword(email, password);
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	},
	logout: async () => {
		await firebase.auth().signOut();
	},
};