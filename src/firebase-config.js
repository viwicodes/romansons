import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

const app = firebase.initializeApp( {
    apiKey: "AIzaSyBk40RuDqWWj8PJZPFJ_qhQ0SVFZ-SMjNA",
    authDomain: "romansons-development.firebaseapp.com",
    projectId: "romansons-development",
    storageBucket: "romansons-development.appspot.com",
    messagingSenderId: "383737317946",
    appId: "1:383737317946:web:3c80acc1bd1277cb1e8303"
});

export const auth = app.auth()
export default app