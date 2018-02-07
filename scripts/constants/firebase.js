import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBxKc57dtAHTbtosCcBAipx3K_TxWYRdGk",
  authDomain: "ask-a-dev-marketing.firebaseapp.com",
  databaseURL: "https://ask-a-dev-marketing.firebaseio.com",
  projectId: "ask-a-dev-marketing",
  storageBucket: "ask-a-dev-marketing.appspot.com",
  messagingSenderId: "530789625625"
};

firebase.initializeApp(config);

const ref = firebase.database().ref();
export const database = firebase.database;
export const firebaseAuth = firebase.auth;

export const refSuperAdmins = (...args) => {
  args.unshift(table.SUPER_ADMINS);
  return refRoot(...args);
};

export const refRoot = (...args) => {
  return ref.child( args.join('/') );
};

export const table = {
  SUPER_ADMINS: 'superAdmins',
  SKILLS: 'skills',
  REGIONS: 'regions',
  EVENTS: 'events',
  ALLOWED_USERNAMES: 'allowedUsernames',
  USERS: {
    BASE: 'users',
    INFO: 'info'
  }
};
