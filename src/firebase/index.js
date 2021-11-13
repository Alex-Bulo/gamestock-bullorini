import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVPm5Jeyq3G23UeVY6Qq-d_hyya0Z8XzQ",
    authDomain: "bullorini-gamestock.firebaseapp.com",
    projectId: "bullorini-gamestock",
    storageBucket: "bullorini-gamestock.appspot.com",
    messagingSenderId: "555252364197",
    appId: "1:555252364197:web:fcd5b305ac8bdf4c5cee4c"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
