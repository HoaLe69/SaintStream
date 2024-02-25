// Import the functions you need from SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// your web app's Firebase configuration
// for firebase JS SDK v7 .20.0 and later , measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDuSN8ChFZAm5gd1FbOdUyTDyOy6yQjFJU',
  authDomain: 'staintstream.firebaseapp.com',
  projectId: 'staintstream',
  storageBucket: 'staintstream.appspot.com',
  messagingSenderId: '999939565285',
  appId: '1:999939565285:web:f63e695b4cd97c6ab5160c',
  measurementId: 'G-7PTK2EKDV9'
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db, app }
