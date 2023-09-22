// eslint-disable-next-line import/no-extraneous-dependencies
import { getAnalytics } from 'firebase/analytics';
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxxjMY9vToLGPRqDnjw5ZC0322DvfHKic',
  authDomain: 'myfootyscarfsapp.firebaseapp.com',
  projectId: 'myfootyscarfsapp',
  storageBucket: 'myfootyscarfsapp.appspot.com',
  messagingSenderId: '871903161117',
  appId: '1:871903161117:web:af5d59a1504331dfd88ff4',
  measurementId: 'G-XHZYSYK3FM',
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
