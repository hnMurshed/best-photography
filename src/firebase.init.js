// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdb-Ir58YB2fFMHXttdNJd44dJzENm4Dg",
  authDomain: "best-photography-by-murshedul.firebaseapp.com",
  projectId: "best-photography-by-murshedul",
  storageBucket: "best-photography-by-murshedul.appspot.com",
  messagingSenderId: "841682952333",
  appId: "1:841682952333:web:61dce85b20546a1bce42c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;