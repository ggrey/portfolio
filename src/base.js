import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBRyfQeSuuMjuHQn6q06FqwYlf-p9sSciI",
    authDomain: "grey-contact.firebaseapp.com",
    databaseURL: "https://grey-contact.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;