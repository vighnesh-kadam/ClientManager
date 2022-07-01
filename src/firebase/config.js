import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
require('firebase/auth')
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API ,
    authDomain: "myappauth-87ffa.firebaseapp.com",
    projectId: "myappauth-87ffa",
    storageBucket:"myappauth-87ffa.appspot.com",
    messagingSenderId: "108749723277",
    appId: "1:108749723277:web:1b2c78e37577793436b4c4"
  };
  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore,projectAuth }


