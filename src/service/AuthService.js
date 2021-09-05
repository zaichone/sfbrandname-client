import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const AuthService = {
    loginWithGoogle: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try{
            const userCred = await firebase.auth().signInWithPopup(provider);
            return {
				user: userCred.user,
			};
        }catch(e){
            return {
                error:e.message,
            }
        }
    },
    logout: async () => {
        await firebase.auth().signOut();
    }
}

export default AuthService;