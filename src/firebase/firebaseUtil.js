import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIuiydgnRPAwN0oxggbxzRXz7t_wafmZ4',
  authDomain: 'ecommerce-664d5.firebaseapp.com',
  databaseURL: 'https://ecommerce-664d5.firebaseio.com',
  projectId: 'ecommerce-664d5',
  storageBucket: 'ecommerce-664d5.appspot.com',
  messagingSenderId: '230649728955',
  appId: '1:230649728955:web:cf56285264f8cfe1927e9e',
  measurementId: 'G-V9PMM0YX80',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserDocument = async (userAuth, otherData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (err) {
      console.log(`error creating user${err.message}`);
    }
  }

  return userRef;
};

export default firebase;
