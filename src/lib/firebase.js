import * as firebase from 'firebase'
import Config from 'react-native-config'

export async function firebaseSignup(email, pass) {
    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);
        console.log("Account created");
        // Navigate to the Home page, the user is auto logged in
    } catch (error) {
        console.log(error.toString())
    }
} 

export async function firebaseLogin(email, pass) {
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");
        // Navigate to the Home page
    } catch (error) {
        console.log(error.toString())
    }
}

export async function firebaseLogout() {

    try {
        await firebase.auth().signOut();
        // Navigate to login view
    } catch (error) {
        console.log(error);
    }
}

export const firebaseInitialize = () => {
    console.log(Config.FIREBASE_DATABASE_URL)
    return firebase.initializeApp({
        apiKey: Config.FIREBASE_API_KEY,
        authDomain: Config.FIREBASE_AUTH_DOMAIN,
        databaseURL: Config.FIREBASE_DATABASE_URL,
        storageBucket: Config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID
    });
}