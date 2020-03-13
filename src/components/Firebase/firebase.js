import app from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAJGSf-BZ2kEGSffroVHkHGZOi2TMaYdzU",
    authDomain: "studyboard-e21ef.firebaseapp.com",
    databaseURL: "https://studyboard-e21ef.firebaseio.com",
    projectId: "studyboard-e21ef",
    storageBucket: "studyboard-e21ef.appspot.com",
    messagingSenderId: "80228546382",
    appId: "1:80228546382:web:94fa49638c799c49d5d01f",
    measurementId: "G-DCQYBXE10C"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.doSignInWithEmailAndPassword(email, password);
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }
                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            ...dbUser,
                        };
                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');


}
export default Firebase;