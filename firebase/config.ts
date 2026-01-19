import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth, onAuthStateChanged, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBlp329mcFzPAlIp4JJf94CXzLslDj0K9Y',
  authDomain: 'recipe-finder-app-da5ac.firebaseapp.com',
  projectId: 'recipe-finder-app-da5ac',
  storageBucket: 'recipe-finder-app-da5ac.firebasestorage.app',
  messagingSenderId: '388723212838',
  appId: '1:388723212838:web:ca98bc9386329260d6dce7',
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
