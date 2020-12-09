/* eslint-disable no-return-await */
/* eslint-disable consistent-return */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBnPtfmfTOUcSBIxrY-g0VoJJ0-hBQNqCg',
  authDomain: 'rest-res-man.firebaseapp.com',
  databaseURL: 'https://rest-res-man.firebaseio.com',
  projectId: 'rest-res-man',
  storageBucket: 'rest-res-man.appspot.com',
  messagingSenderId: '862878766379',
  appId: '1:862878766379:web:439786ea859bbe581fa16e'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    unsubscribe()
    resolve(userAuth)
  }, reject)
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
