import {doc,setDoc,getDoc} from 'firebase/firestore'
import firebase from 'firebase/compat';

const db = firebase.firestore()

export const setupUser = async(user) => {
    alert("writing to firebase now")
    if(user) {
        const userData = user?._delegate;
        await setDoc(doc(db, "users", userData?.uid), {
            firstName: userData?.displayName,
            lastName: null,
            gender: null,
            dob: null,
            city: null,
            state: null,
            pincode: null,
            country: null,
            email: userData?.email,
            emailVerified: userData?.emailVerified ? 1 : 0,
            metadata: {...userData?.metadata},
            phoneNumber: userData?.phoneNumber,
            phoneVerified: 0,
            photoUrl: null,
            userType: "individual"
        });
    }
}

export const getUserDetails = async(uid,setLoader,setError) => {
    console.log("Fetching from firebase uid",uid);
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data()
        console.log("Firebase user details fetch success")
        setLoader(false)
        return data;
    } else {
        console.log("Firebase user details fetch error")
        setError(true)
        return null;
    }
}