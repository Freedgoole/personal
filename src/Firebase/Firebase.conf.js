import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPGa2QRSfvGMLVSgvPeCYRX_fJL7zdex8",
    authDomain: "joobleinterviewfrontend.firebaseapp.com",
    databaseURL: "https://joobleinterviewfrontend.firebaseio.com",
    projectId: "joobleinterviewfrontend",
    storageBucket: "joobleinterviewfrontend.appspot.com",
    messagingSenderId: "84956270178",
    appId: "1:84956270178:web:65528f215c98826a"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase;