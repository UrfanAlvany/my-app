import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyC9iffb5liq6APdHFP4cbaw_r6OaZUu124",
    authDomain: "projectblindmyapp.firebaseapp.com",
    projectId: "projectblindmyapp",
    storageBucket: "projectblindmyapp.appspot.com",
    messagingSenderId: "209018564829",
    appId: "1:209018564829:web:09614669b2422934d2ab34"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()