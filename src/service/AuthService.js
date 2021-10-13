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
	signUpWithEmailAndPassword: async (email, password, firstName, lastName) => {
		const provider = new firebase.auth.GoogleAuthProvider();
		try {
			const userCred = await firebase.auth().createUserWithEmailAndPassword(email, password);
			await firestore.collection("members").doc(userCred.user.uid).set({
                authProvider: "local",
                email,
                firstName,
                lastName,
                userRole: 'client',
                createAt: new Date().getTime(),
				status:'active'
            });
            alert('Sing up sucess');
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
	sendPasswordResetEmail: async (email) => {
		try {
			const userCred = await firebase.auth().sendPasswordResetEmail(email);
            console.log("🚀 ~ file: AuthService.js ~ line 60 ~ sendPasswordResetEmail: ~ userCred", userCred)
			
		} catch (e) {
			return {
				error: e.message,
			};
		}
	},
};