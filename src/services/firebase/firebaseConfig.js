// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBO_96jTvHnYRzn3SfaT57ERGMRGlmNvdg",
authDomain: "pf-react-9fd6f.firebaseapp.com",
projectId: "pf-react-9fd6f",
storageBucket: "pf-react-9fd6f.appspot.com",
messagingSenderId: "387895486449",
appId: "1:387895486449:web:ceb1dabe7f6314cf1d8650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);