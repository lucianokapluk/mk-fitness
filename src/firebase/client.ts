
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfrc7rLSVEzSlEr3eyEJTANDuH6aegf_o",
    authDomain: "mk-fitness-1dc16.firebaseapp.com",
    projectId: "mk-fitness-1dc16",
    storageBucket: "mk-fitness-1dc16.appspot.com",
    messagingSenderId: "838386172453",
    appId: "1:838386172453:web:0f454232e9cb94cd40f5cc",
    measurementId: "G-MXG4JQ7LQY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);