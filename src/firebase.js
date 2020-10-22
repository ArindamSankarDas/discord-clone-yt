import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDvVwuzB9HoXxl-CdUmGoSQtH58kXgMKlU",
  authDomain: "discord-clone-yt-2291e.firebaseapp.com",
  databaseURL: "https://discord-clone-yt-2291e.firebaseio.com",
  projectId: "discord-clone-yt-2291e",
  storageBucket: "discord-clone-yt-2291e.appspot.com",
  messagingSenderId: "518723236356",
  appId: "1:518723236356:web:e96161eec0cc85b9effb51",
  measurementId: "G-MC3WNW2B36"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;