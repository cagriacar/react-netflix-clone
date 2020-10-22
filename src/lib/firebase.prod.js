import Firebase from 'firebase/app'
import  'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCnqlRSzrYzRTgWyunkd5jcZXpm5irp0g",
    authDomain: "netflix-clone-c6f7c.firebaseapp.com",
    databaseURL: "https://netflix-clone-c6f7c.firebaseio.com",
    projectId: "netflix-clone-c6f7c",
    storageBucket: "netflix-clone-c6f7c.appspot.com",
    messagingSenderId: "240918416696",
    appId: "1:240918416696:web:5b2f79798df45934c405cd",
    measurementId: "G-NG25V8891K"
};

const firebase = Firebase.initializeApp(config);


export { firebase };