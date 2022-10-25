// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrWB82iz0YOt6n3NWpIAOsgmBvtZG8sJo",
    authDomain: "e-learn-centre.firebaseapp.com",
    projectId: "e-learn-centre",
    storageBucket: "e-learn-centre.appspot.com",
    messagingSenderId: "519297178734",
    appId: "1:519297178734:web:88989486e74beab45c1a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;