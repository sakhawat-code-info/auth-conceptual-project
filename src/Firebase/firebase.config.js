// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADBDUpCWNxQWqZorxOxsNtMpA6suhM5jo",
    authDomain: "auth-conceptual-project-7fb32.firebaseapp.com",
    projectId: "auth-conceptual-project-7fb32",
    storageBucket: "auth-conceptual-project-7fb32.appspot.com",
    messagingSenderId: "726695608348",
    appId: "1:726695608348:web:2b103bced988ce767a9fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;