import Rebase from 're-base';
import firebase from 'firebase';
// require('dotenv').config();

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "grey-contact.firebaseapp.com",
    databaseURL: "https://grey-contact.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;