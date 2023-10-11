import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSrPc2nwM91bFigyG4wIWtZo_xEOXW2NA',
  authDomain: 'appcontactbook.firebaseapp.com',
  projectId: 'appcontactbook',
  storageBucket: 'appcontactbook.appspot.com',
  messagingSenderId: '377138313017',
  appId: '1:377138313017:web:73d4e0eaf1315333aa9ae8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
