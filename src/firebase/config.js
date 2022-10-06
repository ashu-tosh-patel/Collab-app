import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAeZu7wKyvMv15bo_MR7XSeEPGxdVs3FCs",
    authDomain: "thecollabsite.firebaseapp.com",
    projectId: "thecollabsite",
    storageBucket: "thecollabsite.appspot.com",
    messagingSenderId: "1079156643343",
    appId: "1:1079156643343:web:165e426947d06b439ff57a"
}

//init firebase
firebase.initializeApp(firebaseConfig)


//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }