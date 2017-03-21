import * as firebase from 'firebase'

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