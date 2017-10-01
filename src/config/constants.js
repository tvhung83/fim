import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCAbWYCauHZ_m6JKt3gZF0GPBZcVPBHX5A",
    authDomain: "fim-hd.firebaseapp.com",
    databaseURL: "https://fim-hd.firebaseio.com",
    projectId: "fim-hd",
    storageBucket: "fim-hd.appspot.com",
    messagingSenderId: "751630568325"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
