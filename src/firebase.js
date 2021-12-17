import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyC3AnsKTExiFuORVduhi_nte4SctBbj1CY",
  authDomain: "preentrepreneur-bf6a2.firebaseapp.com",
  projectId: "preentrepreneur-bf6a2",
  storageBucket: "preentrepreneur-bf6a2.appspot.com",
  messagingSenderId: "1086727099930",
  appId: "1:1086727099930:web:e63745ed8eedf659ef23a3",
  measurementId: "G-51D2QL67H2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 