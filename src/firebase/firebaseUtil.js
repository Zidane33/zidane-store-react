import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseConfig = {
      apiKey: "AIzaSyBIuiydgnRPAwN0oxggbxzRXz7t_wafmZ4",
      authDomain: "ecommerce-664d5.firebaseapp.com",
      databaseURL: "https://ecommerce-664d5.firebaseio.com",
      projectId: "ecommerce-664d5",
      storageBucket: "ecommerce-664d5.appspot.com",
      messagingSenderId: "230649728955",
      appId: "1:230649728955:web:cf56285264f8cfe1927e9e",
      measurementId: "G-V9PMM0YX80"
    };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

