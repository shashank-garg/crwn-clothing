import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBNg_H8bHe-QIrFtp7Z4-Dj2mopS6oqlFo",
    authDomain: "crwn-db-e07b2.firebaseapp.com",
    projectId: "crwn-db-e07b2",
    storageBucket: "crwn-db-e07b2.appspot.com",
    messagingSenderId: "779737689962",
    appId: "1:779737689962:web:414f5e253693882716bf13"
}

export const createUserProfileDocument = async (userAuth,additionalData)=>{
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();
if(!snapShot.exists){
const {displayName,email} = userAuth;
const createdAt = new Date();
try{
await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
})
}catch(ex){
console.log('error creating user');

}

}

return userRef;
//console.log(snapShot);
}




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;