import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANqQrCe6eprLrOzH37NAeqxmm8sJwSQgQ",
    authDomain: "instagram-clone-15378.firebaseapp.com",
    projectId: "instagram-clone-15378",
    storageBucket: "instagram-clone-15378.appspot.com",
    messagingSenderId: "712972534217",
    appId: "1:712972534217:web:40e497f20a0b12945a2818",
    measurementId: "G-HEBS7DCKG9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }