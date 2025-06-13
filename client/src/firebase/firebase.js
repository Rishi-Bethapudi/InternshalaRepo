// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-1dPEjf21Q0T9JETeAmywyzOnbbYyeh8',
  authDomain: 'internshalaclone-8f1b2.firebaseapp.com',
  projectId: 'internshalaclone-8f1b2',
  storageBucket: 'internshalaclone-8f1b2.firebasestorage.app',
  messagingSenderId: '358198449215',
  appId: '1:358198449215:web:a14022a9364f8473da148a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
