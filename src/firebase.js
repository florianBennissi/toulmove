import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCMQWQvt4i3XkcwEv3iCOciQ6xvFqOQ61Y",
  authDomain: "man-city-a539e.firebaseapp.com",
  databaseURL: "https://man-city-a539e.firebaseio.com",
  projectId: "man-city-a539e",
  storageBucket: "man-city-a539e.appspot.com",
  messagingSenderId: "89579883868"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};
